# PSL Website Architecture Review
## Menu System & Schedule/Calendar Data Modeling

---

## 1. MENU SYSTEM ANALYSIS & REDESIGN

### Current State Issues:
- Hardcoded menu items in navigation-header.js
- No data-driven approach
- Limited scalability
- No JSON schema integration

### Proposed JSON Outline Schema for Menu Navigation:

```json
{
  "id": "psl-navigation-outline",
  "title": "PSL Website Navigation",
  "author": "PennState Soccer League",
  "description": "Primary navigation structure for the PSL website with hierarchical menu organization",
  "license": "by-sa",
  "metadata": {
    "theme": "penn-state",
    "darkMode": false,
    "mobileBreakpoint": 768,
    "animation": "slide",
    "version": "1.0"
  },
  "items": [
    {
      "id": "nav-home-001",
      "indent": "1",
      "location": "index.html",
      "slug": "home",
      "order": "0",
      "parent": null,
      "title": "Home",
      "description": "PSL homepage with league overview and featured content",
      "metadata": {
        "icon": "icons:home",
        "roles": ["public"],
        "visible": true,
        "component": "home-page"
      }
    },
    {
      "id": "nav-teams-001",
      "indent": "1",
      "location": "teams.html",
      "slug": "teams",
      "order": "1",
      "parent": null,
      "title": "Teams",
      "description": "Overview of all PSL teams and their information",
      "metadata": {
        "icon": "icons:people",
        "roles": ["public"],
        "visible": true,
        "component": "teams-page"
      }
    },
    {
      "id": "nav-team-blue-lions",
      "indent": "2",
      "location": "teams/blue-lions.html",
      "slug": "teams/blue-lions",
      "order": "0",
      "parent": "nav-teams-001",
      "title": "Blue Lions",
      "description": "Blue Lions team roster, stats, and information",
      "metadata": {
        "icon": "icons:pets",
        "teamColor": "#0066cc",
        "roles": ["public"],
        "visible": true
      }
    },
    {
      "id": "nav-team-white-hawks",
      "indent": "2",
      "location": "teams/white-hawks.html",
      "slug": "teams/white-hawks",
      "order": "1",
      "parent": "nav-teams-001",
      "title": "White Hawks",
      "description": "White Hawks team roster, stats, and information",
      "metadata": {
        "icon": "icons:flight",
        "teamColor": "#ffffff",
        "roles": ["public"],
        "visible": true
      }
    },
    {
      "id": "nav-team-red-rovers",
      "indent": "2",
      "location": "teams/red-rovers.html",
      "slug": "teams/red-rovers",
      "order": "2",
      "parent": "nav-teams-001",
      "title": "Red Rovers",
      "description": "Red Rovers team roster, stats, and information",
      "metadata": {
        "icon": "icons:directions-run",
        "teamColor": "#cc0000",
        "roles": ["public"],
        "visible": true
      }
    },
    {
      "id": "nav-team-green-guardians",
      "indent": "2",
      "location": "teams/green-guardians.html",
      "slug": "teams/green-guardians",
      "order": "3",
      "parent": "nav-teams-001",
      "title": "Green Guardians",
      "description": "Green Guardians team roster, stats, and information",
      "metadata": {
        "icon": "icons:security",
        "teamColor": "#00cc66",
        "roles": ["public"],
        "visible": true
      }
    },
    {
      "id": "nav-schedule-001",
      "indent": "1",
      "location": "schedule.html",
      "slug": "schedule",
      "order": "2",
      "parent": null,
      "title": "Schedule",
      "description": "Game schedules, upcoming matches, and calendar events",
      "metadata": {
        "icon": "icons:event",
        "roles": ["public"],
        "visible": true,
        "component": "schedule-page"
      }
    },
    {
      "id": "nav-admin-001",
      "indent": "1",
      "location": "admin.html",
      "slug": "admin",
      "order": "3",
      "parent": null,
      "title": "Administration",
      "description": "Administrative tools and management interface",
      "metadata": {
        "icon": "icons:settings",
        "roles": ["admin", "coach"],
        "visible": false,
        "requiresAuth": true
      }
    },
    {
      "id": "nav-admin-teams",
      "indent": "2",
      "location": "admin/manage-teams.html",
      "slug": "admin/teams",
      "order": "0",
      "parent": "nav-admin-001",
      "title": "Manage Teams",
      "description": "Add, edit, and organize team information",
      "metadata": {
        "icon": "icons:group-work",
        "roles": ["admin"],
        "visible": false
      }
    },
    {
      "id": "nav-admin-schedule",
      "indent": "2",
      "location": "admin/manage-schedule.html",
      "slug": "admin/schedule",
      "order": "1",
      "parent": "nav-admin-001",
      "title": "Manage Schedule",
      "description": "Create and edit game schedules and events",
      "metadata": {
        "icon": "icons:schedule",
        "roles": ["admin"],
        "visible": false
      }
    }
  ]
}
```

### MENU WIREFRAME DESIGN:

```
DESKTOP VIEW (>768px):
┌─────────────────────────────────────────────────────────────────┐
│ [☰ Menu ▼]        PSL LOGO        [Register Button]             │
│                Penn State Soccer                                │
│ ┌─────────────────┐                                            │
│ │ 🏠 Home         │ ← Dropdown Menu (when open)                │
│ │ 👥 Teams     ▶  │   - 200px width                           │
│ │ 📅 Schedule     │   - 15px padding                          │
│ │ ⚙️ Admin     ▶  │   - White bg, blue border                 │
│ └─────────────────┘   - Box shadow for depth                  │
└─────────────────────────────────────────────────────────────────┘

MOBILE VIEW (<768px):
┌─────────────────┐
│ [☰]    PSL [R] │ ← Compressed header
│                │
│ ┌─────────────┐ │
│ │ 🏠 Home     │ │ ← Full-width dropdown
│ │ 👥 Teams ▶  │ │   - Slides down from top
│ │ 📅 Schedule │ │   - Larger touch targets (44px min)
│ │ ⚙️ Admin ▶  │ │   - Swipe gestures supported
│ └─────────────┘ │
└─────────────────┘

INTERACTION STATES:
- Hover: Light blue background (#f1f5f9)
- Focus: Blue outline (2px solid #1e3a8a)
- Active: Darker blue background (#1e40af)
- Touch: 300ms press animation

DARK MODE:
- Background: #1f2937 (gray-800)
- Text: #f9fafb (gray-50)
- Accent: #3b82f6 (blue-500)
- Hover: #374151 (gray-700)
```

---

## 2. SCHEDULE/CALENDAR SYSTEM REDESIGN

### Current State Issues:
- Static hardcoded schedule data
- No calendar widget
- Limited filtering/sorting
- No recurring events support

### Proposed JSON Outline Schema for Schedule Events:

```json
{
  "id": "psl-schedule-outline",
  "title": "PSL Season Schedule",
  "author": "PennState Soccer League",
  "description": "Complete schedule of games, practices, and events for the PSL season with hierarchical organization",
  "license": "by-sa",
  "metadata": {
    "season": "Spring 2025",
    "timezone": "America/New_York",
    "lastUpdated": "2025-01-12T10:00:00Z",
    "leagueId": "psl-2025-spring"
  },
  "items": [
    {
      "id": "schedule-week-001",
      "indent": "1",
      "location": "schedule/week-1.html",
      "slug": "schedule/week-1",
      "order": "0",
      "parent": null,
      "title": "Week 1 - January 13-19",
      "description": "Opening week of PSL Spring 2025 season",
      "metadata": {
        "weekNumber": 1,
        "startDate": "2025-01-13",
        "endDate": "2025-01-19",
        "eventType": "week-container"
      }
    },
    {
      "id": "event-practice-001",
      "indent": "2",
      "location": "events/practice-blue-lions-001.html",
      "slug": "events/practice-001",
      "order": "0",
      "parent": "schedule-week-001",
      "title": "Blue Lions Practice",
      "description": "Regular team practice session for Blue Lions",
      "metadata": {
        "eventType": "practice",
        "startTime": "2025-01-13T18:00:00Z",
        "endTime": "2025-01-13T20:00:00Z",
        "location": {
          "name": "Practice Field",
          "address": "University Park, PA",
          "coordinates": [40.7982, -77.8599]
        },
        "teams": ["blue-lions"],
        "recurring": {
          "pattern": "weekly",
          "interval": 1,
          "daysOfWeek": ["monday", "wednesday"],
          "endDate": "2025-05-01T00:00:00Z"
        },
        "visibility": "team",
        "status": "scheduled"
      }
    },
    {
      "id": "event-game-001",
      "indent": "2",
      "location": "events/game-blue-vs-white-001.html",
      "slug": "events/game-001",
      "order": "1",
      "parent": "schedule-week-001",
      "title": "Blue Lions vs White Hawks",
      "description": "Regular season league match between Blue Lions and White Hawks",
      "metadata": {
        "eventType": "game",
        "startTime": "2025-01-15T15:00:00Z",
        "endTime": "2025-01-15T17:00:00Z",
        "location": {
          "name": "Field A",
          "address": "University Park, PA",
          "coordinates": [40.7982, -77.8599]
        },
        "teams": [
          {
            "id": "blue-lions",
            "name": "Blue Lions",
            "role": "home",
            "color": "#0066cc"
          },
          {
            "id": "white-hawks",
            "name": "White Hawks", 
            "role": "away",
            "color": "#ffffff"
          }
        ],
        "status": "scheduled",
        "recurring": false,
        "tags": ["league-game", "division-a"],
        "visibility": "public",
        "gameWeek": 1
      }
    },
    {
      "id": "schedule-week-002",
      "indent": "1",
      "location": "schedule/week-2.html",
      "slug": "schedule/week-2",
      "order": "1",
      "parent": null,
      "title": "Week 2 - January 20-26",
      "description": "Second week of PSL Spring 2025 season",
      "metadata": {
        "weekNumber": 2,
        "startDate": "2025-01-20",
        "endDate": "2025-01-26",
        "eventType": "week-container"
      }
    },
    {
      "id": "event-game-002",
      "indent": "2",
      "location": "events/game-red-vs-green-001.html",
      "slug": "events/game-002",
      "order": "0",
      "parent": "schedule-week-002",
      "title": "Red Rovers vs Green Guardians",
      "description": "Regular season league match between Red Rovers and Green Guardians",
      "metadata": {
        "eventType": "game",
        "startTime": "2025-01-22T17:30:00Z",
        "endTime": "2025-01-22T19:30:00Z",
        "location": {
          "name": "Field B",
          "address": "University Park, PA"
        },
        "teams": [
          {
            "id": "red-rovers",
            "name": "Red Rovers",
            "role": "home",
            "color": "#cc0000"
          },
          {
            "id": "green-guardians",
            "name": "Green Guardians",
            "role": "away",
            "color": "#00cc66"
          }
        ],
        "status": "scheduled",
        "tags": ["league-game", "division-a"],
        "visibility": "public",
        "gameWeek": 2
      }
    },
    {
      "id": "schedule-playoffs",
      "indent": "1",
      "location": "schedule/playoffs.html",
      "slug": "schedule/playoffs",
      "order": "10",
      "parent": null,
      "title": "Playoff Tournament",
      "description": "End-of-season playoff tournament for PSL championship",
      "metadata": {
        "eventType": "tournament",
        "startDate": "2025-04-15",
        "endDate": "2025-04-22",
        "tournamentType": "single-elimination"
      }
    },
    {
      "id": "event-championship",
      "indent": "2",
      "location": "events/championship-final.html",
      "slug": "events/championship",
      "order": "0",
      "parent": "schedule-playoffs",
      "title": "Championship Final",
      "description": "PSL Spring 2025 Championship Final Match",
      "metadata": {
        "eventType": "championship",
        "startTime": "2025-04-22T19:00:00Z",
        "endTime": "2025-04-22T21:00:00Z",
        "location": {
          "name": "Main Stadium",
          "address": "University Park, PA",
          "capacity": 5000
        },
        "status": "scheduled",
        "tags": ["championship", "final", "playoff"],
        "visibility": "public",
        "ticketed": true,
        "ticketPrice": 10.00
      }
    }
  ]
}
```

### CALENDAR WIDGET WIREFRAME:

```
DESKTOP CALENDAR VIEW:
┌───────────────────────────────────────────────────────────────────┐
│                    January 2025                   [◀] [▶] [Today] │
├───────────────────────────────────────────────────────────────────┤
│  Sun    Mon    Tue    Wed    Thu    Fri    Sat                    │
├───────┬───────┬───────┬───────┬───────┬───────┬───────────────────┤
│       │   1   │   2   │   3   │   4   │   5   │   6              │
│       │       │       │       │       │       │                  │
├───────┼───────┼───────┼───────┼───────┼───────┼───────────────────┤
│   7   │   8   │   9   │  10   │  11   │  12   │  13              │
│       │       │       │       │       │       │ ●Practice        │
├───────┼───────┼───────┼───────┼───────┼───────┼───────────────────┤
│  14   │  15   │  16   │  17   │  18   │  19   │  20              │
│       │●GAME  │       │       │       │       │                  │
│       │3:00PM │       │       │       │       │                  │
└───────┴───────┴───────┴───────┴───────┴───────┴───────────────────┘

[Filter: All ▼] [Team: All ▼] [Type: All ▼]

EVENT DETAILS PANEL (slides out on click):
┌─────────────────────────────────────┐
│ Blue Lions vs White Hawks           │
│ ────────────────────────────────── │
│ 📅 January 15, 2025                │
│ 🕒 3:00 PM - 5:00 PM               │
│ 📍 Field A, University Park        │
│ 👥 Home: Blue Lions                │
│     Away: White Hawks               │
│                                     │
│ [Add to Calendar] [Get Directions]  │
└─────────────────────────────────────┘

MOBILE CALENDAR VIEW:
┌─────────────────────┐
│ January 2025   [≡]  │ ← Compact month selector
│ ◀ 15 Wed 16 ▶       │ ← Day slider view
│ ┌─────────────────┐ │
│ │ 3:00 PM - 5:00  │ │ ← Event cards
│ │ Blue vs White   │ │   - Swipeable
│ │ 📍 Field A      │ │   - Tap to expand
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ 6:00 PM         │ │
│ │ Team Practice   │ │
│ └─────────────────┘ │
└─────────────────────┘

SIZE SPECIFICATIONS:
- Desktop calendar: 800px width × 600px height
- Mobile: 100vw × auto height
- Event cards: min-height 80px
- Touch targets: min 44px × 44px
- Grid cells: square aspect ratio
- Font sizes: 16px body, 14px details, 18px headers

DARK MODE:
- Background: #111827 (gray-900)
- Cards: #1f2937 (gray-800) 
- Text: #f9fafb (gray-50)
- Accents: #3b82f6 (blue-500)
- Events: Color-coded by type
```

---

## 3. DATA INTEGRATION OPPORTUNITIES

### How JSON Outline Schema Powers Multiple Interface Elements:

1. **Navigation Menu Generation**
   - Dynamic menu items from JSON
   - Role-based visibility
   - Nested submenus
   - Icon and label customization

2. **Breadcrumb Navigation**
   - Auto-generated from menu hierarchy
   - Current page highlighting

3. **Search/Filter Options**
   - Menu categories become filter options
   - Team lists for filtering schedule

4. **User Permissions**
   - Role-based menu visibility
   - Admin panel access control

5. **Mobile Navigation**
   - Same JSON drives different mobile layout
   - Progressive disclosure for submenus

### Schedule Data Integration Points:

1. **Dashboard Widgets**
   - "Next Game" card on homepage
   - Recent results display

2. **Team Pages**
   - Team-specific schedule filtering
   - Season statistics

3. **Notification System**
   - Game reminders
   - Schedule change alerts

4. **Export Functionality**
   - iCal/Google Calendar integration
   - PDF schedule generation

---

## 4. IMPLEMENTATION RECOMMENDATIONS

### Menu Component Refactor Using JSON Outline Schema:
```javascript
// outline-menu-service.js
export class OutlineMenuService {
  static async loadMenuOutline() {
    const response = await fetch('/api/navigation-outline');
    return response.json();
  }
  
  static buildMenuTree(outline, userRole = 'public') {
    const visibleItems = outline.items.filter(item => 
      this.isItemVisible(item, userRole)
    );
    
    return this.groupItemsByParent(visibleItems);
  }
  
  static isItemVisible(item, userRole) {
    const roles = item.metadata?.roles || ['public'];
    const visible = item.metadata?.visible !== false;
    return visible && (roles.includes('public') || roles.includes(userRole));
  }
  
  static groupItemsByParent(items) {
    const grouped = {};
    const rootItems = [];
    
    items.forEach(item => {
      if (item.parent === null) {
        rootItems.push(item);
      } else {
        if (!grouped[item.parent]) {
          grouped[item.parent] = [];
        }
        grouped[item.parent].push(item);
      }
    });
    
    // Sort by order
    const sortByOrder = (a, b) => parseInt(a.order) - parseInt(b.order);
    rootItems.sort(sortByOrder);
    Object.keys(grouped).forEach(parentId => {
      grouped[parentId].sort(sortByOrder);
    });
    
    return { rootItems, children: grouped };
  }
}

// navigation-header.js (refactored for JSON Outline Schema)
export class NavigationHeader extends HTMLElement {
  constructor() {
    super();
    this.isMenuOpen = false;
    this.menuOutline = null;
    this.menuTree = null;
  }

  async connectedCallback() {
    await this.loadMenuData();
    this.render();
  }
  
  async loadMenuData() {
    try {
      this.menuOutline = await OutlineMenuService.loadMenuOutline();
      this.menuTree = OutlineMenuService.buildMenuTree(this.menuOutline, 'public');
    } catch (error) {
      console.error('Failed to load menu outline:', error);
      // Fallback to hardcoded menu
      this.menuTree = this.getDefaultMenu();
    }
  }
  
  createMenuItem(item, hasChildren = false) {
    const iconHtml = item.metadata?.icon ? 
      `<iron-icon icon="${item.metadata.icon}" style="margin-right: 8px;"></iron-icon>` : '';
    const arrowHtml = hasChildren ? ' ▶' : '';
    
    return `
      <a href="#${item.slug}" 
         data-page="${item.slug}" 
         data-item-id="${item.id}"
         style="
           display: block;
           padding: 15px 20px;
           text-decoration: none;
           color: #1e3a8a;
           border-bottom: 1px solid #e2e8f0;
           transition: background-color 0.3s;
           text-indent: ${(parseInt(item.indent) - 1) * 20}px;
         " 
         onmouseover="this.style.backgroundColor='#f1f5f9'" 
         onmouseout="this.style.backgroundColor='white'"
         title="${item.description}">
        ${iconHtml}${item.title}${arrowHtml}
      </a>`;
  }
  
  render() {
    if (!this.menuTree) return;
    
    const logoImage = this.getAttribute('logo-image') || '';
    const hasLogoImage = logoImage !== '';
    
    // Generate menu items from outline
    const menuItems = this.menuTree.rootItems.map(item => {
      const hasChildren = this.menuTree.children[item.id]?.length > 0;
      let html = this.createMenuItem(item, hasChildren);
      
      // Add children if they exist
      if (hasChildren) {
        const childItems = this.menuTree.children[item.id]
          .map(child => this.createMenuItem(child))
          .join('');
        html += childItems;
      }
      
      return html;
    }).join('');
    
    this.innerHTML = `
      <header style="
        background: ${hasLogoImage ? `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('${logoImage}')` : 'white'};
        background-size: cover;
        background-position: center;
        padding: 20px;
        border-bottom: 2px solid #1e3a8a;
        font-family: Arial, sans-serif;
        position: relative;
      ">
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        ">
          <div style="position: relative;">
            <button id="menu-btn" style="
              background: #1e3a8a;
              color: white;
              border: none;
              padding: 12px 20px;
              border-radius: 5px;
              font-size: 18px;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 10px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            ">
              <span style="font-size: 20px;">☰</span> Menu
            </button>
            
            <div id="dropdown-menu" style="
              position: absolute;
              top: 100%;
              left: 0;
              background: white;
              border: 2px solid #1e3a8a;
              border-radius: 5px;
              min-width: 250px;
              max-width: 400px;
              z-index: 1000;
              display: none;
              box-shadow: 0 4px 12px rgba(0,0,0,0.15);
              max-height: 80vh;
              overflow-y: auto;
            ">
              ${menuItems}
            </div>
          </div>
          
          <!-- Logo and title section remains the same -->
          <div style="text-align: center;">
            <h1 style="
              color: #1e3a8a;
              font-size: 36px;
              margin: 0 0 10px 0;
              text-shadow: ${hasLogoImage ? '2px 2px 4px rgba(255,255,255,0.8)' : 'none'};
            ">${this.menuOutline?.title?.split(' ')[0] || 'PSL'}</h1>
            <p style="
              color: #374151;
              margin: 0;
              font-size: 16px;
              text-shadow: ${hasLogoImage ? '1px 1px 2px rgba(255,255,255,0.8)' : 'none'};
            ">${this.menuOutline?.description || 'PennState Soccer League'}</p>
          </div>
          
          <button style="
            background: #1e3a8a;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          " onmouseover="this.style.backgroundColor='#1e40af'" onmouseout="this.style.backgroundColor='#1e3a8a'">
            Register
          </button>
        </div>
      </header>
    `;
    
    this.attachEventListeners();
  }
  
  attachEventListeners() {
    setTimeout(() => {
      const menuBtn = this.querySelector('#menu-btn');
      const dropdown = this.querySelector('#dropdown-menu');
      const menuLinks = this.querySelectorAll('[data-page]');
      
      menuBtn?.addEventListener('click', () => {
        this.isMenuOpen = !this.isMenuOpen;
        dropdown.style.display = this.isMenuOpen ? 'block' : 'none';
      });
      
      document.addEventListener('click', (e) => {
        if (!this.contains(e.target)) {
          this.isMenuOpen = false;
          if (dropdown) dropdown.style.display = 'none';
        }
      });
      
      menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const page = e.target.getAttribute('data-page');
          const itemId = e.target.getAttribute('data-item-id');
          
          this.dispatchEvent(new CustomEvent('navigate', { 
            detail: { 
              page, 
              itemId,
              outline: this.menuOutline 
            } 
          }));
          
          this.isMenuOpen = false;
          if (dropdown) dropdown.style.display = 'none';
        });
      });
    }, 0);
  }
}
```

### Calendar Component Architecture Using JSON Outline Schema:
```javascript
// schedule-outline-service.js
export class ScheduleOutlineService {
  static async loadScheduleOutline(startDate, endDate) {
    const params = new URLSearchParams({
      start: startDate.toISOString(),
      end: endDate.toISOString()
    });
    const response = await fetch(`/api/schedule-outline?${params}`);
    return response.json();
  }
  
  static groupEventsByWeek(outline) {
    const weeks = {};
    const events = [];
    
    outline.items.forEach(item => {
      if (item.metadata?.eventType === 'week-container') {
        weeks[item.id] = {
          ...item,
          events: []
        };
      } else if (item.parent && item.metadata?.eventType) {
        events.push(item);
      }
    });
    
    // Group events under their parent weeks
    events.forEach(event => {
      if (weeks[event.parent]) {
        weeks[event.parent].events.push(event);
      }
    });
    
    return Object.values(weeks).sort((a, b) => 
      parseInt(a.order) - parseInt(b.order)
    );
  }
  
  static filterEventsByType(outline, eventTypes = []) {
    return outline.items.filter(item => 
      eventTypes.length === 0 || 
      eventTypes.includes(item.metadata?.eventType)
    );
  }
  
  static filterEventsByTeam(outline, teamId) {
    return outline.items.filter(item => {
      const teams = item.metadata?.teams;
      if (!teams) return false;
      
      if (Array.isArray(teams)) {
        return teams.some(team => 
          typeof team === 'string' ? team === teamId : team.id === teamId
        );
      }
      
      return teams.includes(teamId);
    });
  }
}

// calendar-widget.js (JSON Outline Schema implementation)
export class CalendarWidget extends HTMLElement {
  constructor() {
    super();
    this.currentDate = new Date();
    this.scheduleOutline = null;
    this.weeklyEvents = [];
    this.viewMode = 'month'; // month, week, day, agenda
    this.selectedFilters = {
      eventTypes: [],
      teams: [],
      visibility: ['public']
    };
  }
  
  async connectedCallback() {
    await this.loadScheduleData();
    this.render();
  }
  
  async loadScheduleData() {
    const startDate = new Date(this.currentDate);
    startDate.setDate(1); // First day of month
    const endDate = new Date(this.currentDate);
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(0); // Last day of month
    
    try {
      this.scheduleOutline = await ScheduleOutlineService.loadScheduleOutline(startDate, endDate);
      this.weeklyEvents = ScheduleOutlineService.groupEventsByWeek(this.scheduleOutline);
    } catch (error) {
      console.error('Failed to load schedule:', error);
      this.scheduleOutline = this.getDefaultSchedule();
    }
  }
  
  createEventCard(eventItem) {
    const metadata = eventItem.metadata;
    const startTime = new Date(metadata.startTime);
    const eventType = metadata.eventType || 'event';
    
    const typeColors = {
      'game': '#1e3a8a',
      'practice': '#059669',
      'tournament': '#7c2d12',
      'championship': '#dc2626'
    };
    
    const typeColor = typeColors[eventType] || '#6b7280';
    
    return `
      <div class="event-card" 
           data-event-id="${eventItem.id}"
           data-slug="${eventItem.slug}"
           style="
             background: white;
             border-left: 4px solid ${typeColor};
             border-radius: 8px;
             padding: 15px;
             margin-bottom: 10px;
             box-shadow: 0 2px 4px rgba(0,0,0,0.1);
             cursor: pointer;
             transition: transform 0.2s;
           "
           onmouseover="this.style.transform='translateY(-2px)'"
           onmouseout="this.style.transform='translateY(0)'">
        
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div style="flex: 1;">
            <h4 style="margin: 0 0 8px 0; color: ${typeColor}; font-size: 16px;">
              ${eventItem.title}
            </h4>
            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">
              ${eventItem.description}
            </p>
            
            <div style="display: flex; gap: 15px; font-size: 13px; color: #374151;">
              <span>🕒 ${startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
              ${metadata.location?.name ? `<span>📍 ${metadata.location.name}</span>` : ''}
            </div>
            
            ${metadata.teams ? this.renderEventTeams(metadata.teams) : ''}
          </div>
          
          <div style="
            background: ${typeColor};
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 11px;
            text-transform: uppercase;
            font-weight: bold;
          ">
            ${eventType}
          </div>
        </div>
      </div>
    `;
  }
  
  renderEventTeams(teams) {
    if (!Array.isArray(teams)) return '';
    
    const teamInfo = teams.map(team => {
      if (typeof team === 'string') return team;
      return `<span style="color: ${team.color || '#374151'}">${team.name}</span>`;
    }).join(' vs ');
    
    return `<div style="margin-top: 8px; font-size: 14px; font-weight: 500;">
              ${teamInfo}
            </div>`;
  }
  
  render() {
    if (!this.scheduleOutline) {
      this.innerHTML = '<div>Loading schedule...</div>';
      return;
    }
    
    const monthYear = this.currentDate.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
    
    if (this.viewMode === 'agenda') {
      this.renderAgendaView(monthYear);
    } else {
      this.renderCalendarView(monthYear);
    }
  }
  
  renderAgendaView(monthYear) {
    const weekItems = this.weeklyEvents.map(week => `
      <div class="week-section" style="margin-bottom: 30px;">
        <h3 style="
          color: #1e3a8a;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 10px;
          margin-bottom: 20px;
        ">${week.title}</h3>
        
        <div class="events-list">
          ${week.events.map(event => this.createEventCard(event)).join('')}
          ${week.events.length === 0 ? '<p style="color: #6b7280; font-style: italic;">No events scheduled</p>' : ''}
        </div>
      </div>
    `).join('');
    
    this.innerHTML = `
      <div class="calendar-widget agenda-view" style="
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      ">
        <div class="calendar-header" style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding: 20px;
          background: #f8fafc;
          border-radius: 10px;
        ">
          <button onclick="this.parentElement.parentElement.parentElement.previousMonth()" style="
            background: #1e3a8a;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
          ">◀</button>
          
          <h2 style="margin: 0; color: #1e3a8a;">${this.scheduleOutline.title}</h2>
          <span style="font-size: 18px; color: #374151;">${monthYear}</span>
          
          <button onclick="this.parentElement.parentElement.parentElement.nextMonth()" style="
            background: #1e3a8a;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
          ">▶</button>
        </div>
        
        <div class="view-controls" style="
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        ">
          <button onclick="this.parentElement.parentElement.switchView('month')" style="
            padding: 8px 16px;
            border: 1px solid #e2e8f0;
            background: ${this.viewMode === 'month' ? '#1e3a8a' : 'white'};
            color: ${this.viewMode === 'month' ? 'white' : '#374151'};
            border-radius: 5px;
            cursor: pointer;
          ">Month</button>
          <button onclick="this.parentElement.parentElement.switchView('agenda')" style="
            padding: 8px 16px;
            border: 1px solid #e2e8f0;
            background: ${this.viewMode === 'agenda' ? '#1e3a8a' : 'white'};
            color: ${this.viewMode === 'agenda' ? 'white' : '#374151'};
            border-radius: 5px;
            cursor: pointer;
          ">Agenda</button>
        </div>
        
        <div class="schedule-content">
          ${weekItems}
        </div>
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  attachEventListeners() {
    this.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const eventId = e.currentTarget.getAttribute('data-event-id');
        const slug = e.currentTarget.getAttribute('data-slug');
        
        this.dispatchEvent(new CustomEvent('event-selected', {
          detail: { eventId, slug, outline: this.scheduleOutline }
        }));
      });
    });
  }
  
  switchView(newView) {
    this.viewMode = newView;
    this.render();
  }
  
  async previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    await this.loadScheduleData();
    this.render();
  }
  
  async nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    await this.loadScheduleData();
    this.render();
  }
}

customElements.define('calendar-widget', CalendarWidget);
```

This architecture provides a scalable, data-driven foundation that can adapt to different schools, sports, and organizational needs while maintaining consistency and usability across devices and interaction modes.