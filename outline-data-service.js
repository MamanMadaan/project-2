// Simple data service that loads JSON Outline Schema data
export class OutlineDataService {
  static async loadNavigationOutline() {
    try {
      const response = await fetch('./data/navigation-outline.json');
      return await response.json();
    } catch (error) {
      console.error('Failed to load navigation outline:', error);
      return this.getDefaultNavigation();
    }
  }
  
  static async loadScheduleOutline() {
    try {
      const response = await fetch('./data/schedule-outline.json');
      return await response.json();
    } catch (error) {
      console.error('Failed to load schedule outline:', error);
      return this.getDefaultSchedule();
    }
  }
  
  static async loadTeamsOutline() {
    try {
      const response = await fetch('./data/teams-outline.json');
      return await response.json();
    } catch (error) {
      console.error('Failed to load teams outline:', error);
      return this.getDefaultTeams();
    }
  }
  
  static getDefaultNavigation() {
    // Fallback navigation if JSON fails to load
    return {
      items: [
        {
          id: "nav-home",
          title: "Home",
          slug: "home",
          order: "0",
          metadata: { icon: "🏠", component: "home-page" }
        },
        {
          id: "nav-teams", 
          title: "Teams",
          slug: "teams",
          order: "1",
          metadata: { icon: "👥", component: "teams-page" }
        },
        {
          id: "nav-schedule",
          title: "Schedule", 
          slug: "schedule",
          order: "2",
          metadata: { icon: "📅", component: "schedule-page" }
        }
      ]
    };
  }
  
  static getDefaultSchedule() {
    return {
      title: "PSL Schedule",
      items: []
    };
  }
  
  static getDefaultTeams() {
    return {
      title: "PSL Teams",
      items: [
        {
          id: "team-blue-lions",
          title: "Blue Lions",
          description: "Championship team",
          metadata: { teamColor: "#0066cc", wins: 15, losses: 3 }
        }
      ]
    };
  }
  
  // Helper function to build menu tree from outline
  static buildMenuTree(outline) {
    const items = outline.items || [];
    return items
      .filter(item => item.metadata?.visible !== false)
      .sort((a, b) => parseInt(a.order) - parseInt(b.order))
      .map(item => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        icon: item.metadata?.icon || '',
        component: item.metadata?.component
      }));
  }
  
  // Helper function to get events in chronological order
  static getUpcomingEvents(outline, limit = 10) {
    const events = outline.items || [];
    return events
      .filter(item => item.metadata?.eventType && item.metadata?.startTime)
      .sort((a, b) => new Date(a.metadata.startTime) - new Date(b.metadata.startTime))
      .slice(0, limit)
      .map(event => ({
        id: event.id,
        title: event.title,
        description: event.description,
        startTime: event.metadata.startTime,
        location: event.metadata.location,
        teams: event.metadata.teams,
        eventType: event.metadata.eventType
      }));
  }
  
  // Helper function to get teams data
  static getTeamsData(outline) {
    const teams = outline.items || [];
    return teams
      .filter(item => item.id.startsWith('team-'))
      .sort((a, b) => parseInt(a.order) - parseInt(b.order))
      .map(team => ({
        id: team.id,
        title: team.title,
        description: team.description,
        color: team.metadata?.teamColor || '#1e3a8a',
        captain: team.metadata?.captain,
        coach: team.metadata?.coach,
        wins: team.metadata?.wins || 0,
        losses: team.metadata?.losses || 0,
        draws: team.metadata?.draws || 0,
        homeField: team.metadata?.homeField,
        achievements: team.metadata?.achievements || [],
        roster: team.metadata?.roster || [],
        teamImage: team.metadata?.teamImage,
        founded: team.metadata?.founded
      }));
  }
}