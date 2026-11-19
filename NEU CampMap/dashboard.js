// ==========================================
// NEW ERA UNIVERSITY CAMPUS DATA MODEL
// ==========================================
const BUILDINGS = {
  MAIN: {
    id: 'MAIN',
    name: 'Main Building (Administration & Colleges)',
    shortName: 'Main Building',
    code: 'MAIN',
    color: '#172554',
    bgTint: '#eff6ff',
    floors: [1, 2, 3],
    campusBox: { x: 435, y: 312, w: 280, h: 52 },
    entranceNode: 'N_MAIN_FRONT'
  },
  IS: {
    id: 'IS',
    name: 'Integrated School Building (Building A & Building B)',
    shortName: 'Integrated School',
    code: 'IS',
    color: '#1e3a8a',
    bgTint: '#eff6ff',
    floors: [1, 2, 3],
    campusBox: { x: 205, y: 278, w: 205, h: 105 },
    entranceNode: 'N_IS_DROP'
  },
  PSB: {
    id: 'PSB',
    name: 'PSB Building (Professional Schools Building)',
    shortName: 'PSB Building',
    code: 'PSB',
    color: '#172554',
    bgTint: '#eff6ff',
    floors: [1, 2, 3],
    campusBox: { x: 112, y: 120, w: 62, h: 125 },
    entranceNode: 'N_PSB_ENT'
  },
  SOM: {
    id: 'SOM',
    name: 'School of Management (SOM)',
    shortName: 'School of Management',
    code: 'SOM',
    color: '#172554',
    bgTint: '#eff6ff',
    floors: [1, 2, 3],
    campusBox: { x: 265, y: 500, w: 165, h: 36 },
    entranceNode: 'N_SOM_ENT'
  },
  LIB: {
    id: 'LIB',
    name: 'New Era University Library',
    shortName: 'NEU Library',
    code: 'LIB',
    color: '#1e3a8a',
    bgTint: '#eff6ff',
    floors: [1, 2, 3],
    campusBox: { x: 706, y: 416, w: 68, h: 72 },
    entranceNode: 'N_LIB_ENT'
  },
  CRFC: {
    id: 'CRFC',
    name: 'Central Recreation & Fitness Center',
    shortName: 'Recreation & Fitness',
    code: 'CRFC',
    color: '#172554',
    bgTint: '#eff6ff',
    floors: [1, 2, 3],
    campusBox: { x: 76, y: 422, w: 94, h: 48 },
    entranceNode: 'N_CRFC_ENT'
  }
};

const LOCATIONS = [
  { id: 'ENTRANCE-MAIN', code: 'ENTRANCE', name: 'Main Vehicle & Pedestrian Entrance (Central Ave)', category: 'Gates & Parking', building: null, floor: null, status: 'Open', desc: 'Primary campus entry lane from Central Avenue leading directly to the NEU Roundabout and IS Traffic Flow route.', campusCoord: { x: 562, y: 542 }, node: 'N_ENT_GATE' },
  { id: 'EXIT-MAIN', code: 'EXIT-E', name: 'East Exit Gate (Roundabout to Central Ave)', category: 'Gates & Parking', building: null, floor: null, status: 'Open', desc: 'Dedicated outbound lane parallel to the main entrance onto Central Avenue.', campusCoord: { x: 536, y: 542 }, node: 'N_EAST_EXIT' },
  { id: 'EXIT-WEST', code: 'EXIT-W', name: 'West Exit Gate (IS / Chapel Exit to Central Ave)', category: 'Gates & Parking', building: null, floor: null, status: 'Open', desc: 'Primary exit road for vehicles coming from the Integrated School drop-off lane, New Era Chapel, and SOM.', campusCoord: { x: 244, y: 542 }, node: 'N_WEST_EXIT' },
  { id: 'PARK-VISITOR', code: 'P-VS', name: 'Visitor and Student Parking Lot', category: 'Gates & Parking', building: null, floor: null, status: '42/60 Slots', desc: 'Central parking area located west of the Roundabout and south of the Main Building.', campusCoord: { x: 472, y: 432 }, node: 'N_VIS_PARK' },
  { id: 'PARK-FACULTY', code: 'P-FS', name: 'Faculty and Staff Parking Area', category: 'Gates & Parking', building: null, floor: null, status: 'Open', desc: 'Designated parking bays east of the Roundabout and directly west of the NEU Library.', campusCoord: { x: 645, y: 446 }, node: 'N_FAC_PARK' },
  { id: 'PARK-OFFICIAL', code: 'P-OFF', name: 'NEU Official Parking Only', category: 'Gates & Parking', building: null, floor: null, status: 'Restricted', desc: 'Reserved parking strip along the eastern perimeter beside the NEU Library.', campusCoord: { x: 752, y: 506 }, node: 'N_LIB_ENT' },
  { id: 'CHAPEL', code: 'CHAPEL', name: 'New Era Chapel', category: 'Facilities & Dorms', building: null, floor: null, status: 'Open', desc: 'University house of worship situated between the West Exit road and Visitor Parking.', campusCoord: { x: 304, y: 448 }, node: 'N_CHAPEL' },
  { id: 'OPEN-FIELD', code: 'FIELD', name: 'NEU Open Field & Track Oval', category: 'Facilities & Dorms', building: null, floor: null, status: 'Open', desc: 'University athletic field, football pitch, and track oval in the northwest campus sector.', campusCoord: { x: 304, y: 185 }, node: 'N_FIELD_S' },
  { id: 'COVERED-COURT', code: 'COURT', name: 'NEU Covered Court', category: 'Facilities & Dorms', building: null, floor: null, status: 'Open', desc: 'Multi-purpose covered basketball and PE court located north of the Main Building.', campusCoord: { x: 476, y: 264 }, node: 'N_MAIN_BACK' },
  { id: 'LADIES-DORM', code: 'DORM-F', name: 'Ladies Dormitory', category: 'Facilities & Dorms', building: null, floor: null, status: 'Residents Only', desc: 'On-campus female student residence located at the northwest corner near PSB Building.', campusCoord: { x: 180, y: 80 }, node: 'N_PSB_NW' },
  { id: 'MENS-DORM', code: 'DORM-M', name: "Men's Dormitory", category: 'Facilities & Dorms', building: null, floor: null, status: 'Residents Only', desc: 'On-campus male student residence situated east of the Open Field and north of the Covered Court.', campusCoord: { x: 454, y: 185 }, node: 'N_MENS_DORM' },
  { id: 'REGISTRAR', code: 'REG', name: "University Registrar's Office", category: 'Admin & Offices', building: 'MAIN', floor: 1, status: 'Open', desc: 'Enrollment verification, COR printing, Transcript of Records (TOR), and academic records.', floorBox: { x: 100, y: 120, w: 230, h: 125 }, node: 'N_MAIN_FRONT' },
  { id: 'ADMISSIONS', code: 'ADM', name: 'Office of Admissions & Scholarships', category: 'Admin & Offices', building: 'MAIN', floor: 1, status: 'Open', desc: 'New student applications, entrance exam permits, and scholarship grants.', floorBox: { x: 350, y: 120, w: 200, h: 125 }, node: 'N_MAIN_FRONT' },
  { id: 'CASHIER', code: 'CASH', name: 'Cashier & Accounting Office', category: 'Admin & Offices', building: 'MAIN', floor: 1, status: 'Open', desc: 'Tuition payments, examination permits, and student financial clearance.', floorBox: { x: 570, y: 120, w: 230, h: 125 }, node: 'N_MAIN_FRONT' },
  { id: 'MAIN-LOBBY', code: 'LOBBY', name: 'Main Building Information & Security Desk', category: 'Admin & Offices', building: 'MAIN', floor: 1, status: 'Open', desc: 'Main reception lobby, ID validation, and visitor pass issuance.', floorBox: { x: 320, y: 315, w: 260, h: 120 }, node: 'N_MAIN_FRONT' },
  { id: 'CICS-LAB1', code: 'CICS-Lab 1', name: 'College of Informatics & Computing Lab 1', category: 'Classrooms & Labs', building: 'MAIN', floor: 2, status: 'Available', desc: '2nd floor computer laboratory for BSIT/BSCS programming and database courses.', floorBox: { x: 100, y: 120, w: 245, h: 125 }, node: 'N_MAIN_FRONT' },
  { id: 'CICS-DEAN', code: 'CICS-OFC', name: 'College of Informatics & Computing Studies Office', category: 'Admin & Offices', building: 'MAIN', floor: 2, status: 'Open', desc: 'CICS Dean’s office, faculty consultation room, and capstone coordination.', floorBox: { x: 375, y: 120, w: 195, h: 125 }, node: 'N_MAIN_FRONT' },
  { id: 'MAIN-301', code: 'M-301', name: 'Main Building Lecture Room 301', category: 'Classrooms & Labs', building: 'MAIN', floor: 3, status: 'In Class', desc: '3rd floor multimedia lecture hall for general education and engineering courses.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_MAIN_FRONT' },
  { id: 'IS-BLDGA', code: 'IS-A', name: 'Integrated School — Building A (Lower Wing)', category: 'Classrooms & Labs', building: 'IS', floor: 1, status: 'In Class', desc: 'South wing of the Integrated School (Building A) along the IS drop-off traffic lane.', floorBox: { x: 100, y: 315, w: 320, h: 120 }, node: 'N_IS_DROP' },
  { id: 'IS-PRIN', code: 'IS-OFC', name: 'Integrated School Principal & Faculty Office', category: 'Admin & Offices', building: 'IS', floor: 1, status: 'Open', desc: 'Basic education administration, guidance office, and parent coordination desk.', floorBox: { x: 460, y: 315, w: 340, h: 120 }, node: 'N_IS_DROP' },
  { id: 'IS-BLDGB', code: 'IS-B', name: 'Integrated School — Building B (Upper Wing)', category: 'Classrooms & Labs', building: 'IS', floor: 2, status: 'In Class', desc: 'North wing of the Integrated School (Building B) facing the NEU Open Field.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_IS_DROP' },
  { id: 'PSB-101', code: 'PSB-101', name: 'PSB Graduate Seminar Hall', category: 'Classrooms & Labs', building: 'PSB', floor: 1, status: 'Available', desc: 'Professional Schools Building ground floor lecture and defense room.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_PSB_ENT' },
  { id: 'PSB-DEAN', code: 'PSB-OFC', name: 'School of Graduate Studies Office', category: 'Admin & Offices', building: 'PSB', floor: 2, status: 'Open', desc: 'Graduate program advising, thesis/dissertation office, and faculty lounge.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_PSB_ENT' },
  { id: 'PSB-301', code: 'PSB-301', name: 'PSB Thesis & Capstone Defense Room', category: 'Classrooms & Labs', building: 'PSB', floor: 3, status: 'Available', desc: '3rd floor multimedia presentation hall for undergraduate and graduate thesis defenses.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_PSB_ENT' },
  { id: 'SOM-101', code: 'SOM-101', name: 'School of Management (SOM) Business Hall', category: 'Classrooms & Labs', building: 'SOM', floor: 1, status: 'Available', desc: 'Accountancy, Business Administration, and Entrepreneurship lecture rooms near Central Ave.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_SOM_ENT' },
  { id: 'SOM-DEAN', code: 'SOM-OFC', name: 'SOM Dean & Accountancy Department', category: 'Admin & Offices', building: 'SOM', floor: 2, status: 'Open', desc: 'School of Management administrative office and student council hub.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_SOM_ENT' },
  { id: 'SOM-301', code: 'SOM-301', name: 'SOM Financial Simulation & Case Room', category: 'Classrooms & Labs', building: 'SOM', floor: 3, status: 'Available', desc: '3rd floor business case study room and accounting laboratory.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_SOM_ENT' },
  { id: 'LIB-CIRC', code: 'LIB-1F', name: 'NEU Library Circulation & E-Library', category: 'Facilities & Dorms', building: 'LIB', floor: 1, status: 'Open', desc: 'Main book borrowing counter, OPAC terminals, and digital research stations.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_LIB_ENT' },
  { id: 'LIB-QUIET', code: 'LIB-2F', name: 'Silent Reading Hall & Filipiniana Section', category: 'Facilities & Dorms', building: 'LIB', floor: 2, status: 'Quiet Zone', desc: 'Air-conditioned individual study carrels and reference collections.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_LIB_ENT' },
  { id: 'LIB-3F', code: 'LIB-3F', name: 'Archives, Periodicals & Audio-Visual Room', category: 'Facilities & Dorms', building: 'LIB', floor: 3, status: 'Open', desc: '3rd floor university historical archives, bound journals, and collaborative study pods.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_LIB_ENT' },
  { id: 'CRFC-ARENA', code: 'CRFC-1F', name: 'Central Recreation & Fitness Center Arena', category: 'Facilities & Dorms', building: 'CRFC', floor: 1, status: 'Open', desc: 'Indoor sports complex, fitness gym, and university wellness center in the southwest wing.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_CRFC_ENT' },
  { id: 'CRFC-2F', code: 'CRFC-2F', name: 'Indoor Martial Arts & Dance Studio', category: 'Facilities & Dorms', building: 'CRFC', floor: 2, status: 'Open', desc: '2nd floor physical education studio for taekwondo, arnis, and rhythmic activities.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_CRFC_ENT' },
  { id: 'CRFC-3F', code: 'CRFC-3F', name: 'Sports Science & Athletics Department Office', category: 'Admin & Offices', building: 'CRFC', floor: 3, status: 'Open', desc: '3rd floor varsity coordination and physical education faculty offices.', floorBox: { x: 100, y: 120, w: 320, h: 125 }, node: 'N_CRFC_ENT' }
];

const STUDENT_SCHEDULE = [
  { time: '07:30 AM – 09:00 AM', code: 'IS Drop-Off', title: 'IS Traffic Flow Route (Central Ave to IS Bldg)', roomId: 'IS-BLDGA', roomLabel: 'Integrated School Bldg A & B' },
  { time: '09:30 AM – 11:30 AM', code: 'IT 204', title: 'Web Systems & Technologies', roomId: 'CICS-LAB1', roomLabel: 'Main Building • 2nd Floor (CICS-Lab 1)' },
  { time: '01:00 PM – 02:30 PM', code: 'BA 102', title: 'Principles of Management', roomId: 'SOM-101', roomLabel: 'School of Management • 1st Floor' },
  { time: '03:00 PM – 04:30 PM', code: 'Study', title: 'Capstone Research & E-Library', roomId: 'LIB-CIRC', roomLabel: 'NEU Library • 1st Floor' }
];

const GRAPH_NODES = {
  N_ENT_GATE:   { x: 562, y: 538, label: 'Central Ave Entrance' },
  N_EAST_EXIT:  { x: 536, y: 538, label: 'East Exit Gate' },
  N_ROTUNDA_S:  { x: 550, y: 438, label: 'South Roundabout' },
  N_ROTUNDA_E:  { x: 582, y: 410, label: 'East Roundabout' },
  N_ROTUNDA_N:  { x: 550, y: 382, label: 'North Roundabout' },
  N_ROTUNDA_W:  { x: 518, y: 410, label: 'West Roundabout' },
  N_VIS_PARK:   { x: 472, y: 410, label: 'Visitor & Student Parking' },
  N_FAC_PARK:   { x: 645, y: 410, label: 'Faculty & Staff Parking' },
  N_LIB_ENT:    { x: 740, y: 410, label: 'NEU Library Entrance' },
  N_MAIN_FRONT: { x: 580, y: 378, label: 'Main Building Front Road' },
  N_MAIN_EAST:  { x: 730, y: 378, label: 'Main Building East Corner' },
  N_MAIN_NE:    { x: 730, y: 298, label: 'Main Building Northeast Road' },
  N_MAIN_BACK:  { x: 560, y: 298, label: 'Main Building North / Covered Court' },
  N_MAIN_NW:    { x: 422, y: 298, label: 'Main Building Northwest Corner' },
  N_MAIN_SW:    { x: 422, y: 392, label: 'Main Building Southwest Junction' },
  N_IS_DROP:    { x: 310, y: 392, label: 'Integrated School Drop-Off Road' },
  N_IS_SW:      { x: 192, y: 392, label: 'Integrated School Southwest Corner' },
  N_IS_NW:      { x: 192, y: 262, label: 'Integrated School Northwest Road' },
  N_PSB_ENT:    { x: 175, y: 200, label: 'PSB Building Entrance' },
  N_PSB_NW:     { x: 145, y: 108, label: 'PSB / Ladies Dorm Road' },
  N_FIELD_S:    { x: 304, y: 262, label: 'Open Field South Road' },
  N_MENS_DORM:  { x: 422, y: 200, label: "Men's Dormitory Road" },
  N_CHAPEL:     { x: 256, y: 448, label: 'New Era Chapel Road' },
  N_CRFC_ENT:   { x: 185, y: 448, label: 'Recreation & Fitness Center' },
  N_SOM_ENT:    { x: 256, y: 505, label: 'School of Management (SOM)' },
  N_WEST_EXIT:  { x: 244, y: 538, label: 'West Exit Gate (Central Ave)' }
};

const GRAPH_EDGES = [
  ['N_ENT_GATE', 'N_ROTUNDA_S', 45], ['N_ROTUNDA_S', 'N_EAST_EXIT', 45],
  ['N_ROTUNDA_S', 'N_ROTUNDA_E', 22], ['N_ROTUNDA_E', 'N_ROTUNDA_N', 22],
  ['N_ROTUNDA_N', 'N_ROTUNDA_W', 22], ['N_ROTUNDA_W', 'N_ROTUNDA_S', 22],
  ['N_ROTUNDA_E', 'N_FAC_PARK', 35], ['N_FAC_PARK', 'N_LIB_ENT', 45],
  ['N_LIB_ENT', 'N_MAIN_EAST', 25], ['N_ROTUNDA_N', 'N_MAIN_FRONT', 20],
  ['N_MAIN_FRONT', 'N_MAIN_EAST', 65], ['N_MAIN_EAST', 'N_MAIN_NE', 40],
  ['N_MAIN_NE', 'N_MAIN_BACK', 75], ['N_MAIN_BACK', 'N_MAIN_NW', 65],
  ['N_MAIN_NW', 'N_MAIN_SW', 48], ['N_MAIN_FRONT', 'N_MAIN_SW', 72],
  ['N_ROTUNDA_W', 'N_VIS_PARK', 25], ['N_VIS_PARK', 'N_MAIN_SW', 30],
  ['N_MAIN_SW', 'N_IS_DROP', 55], ['N_IS_DROP', 'N_IS_SW', 58],
  ['N_IS_SW', 'N_IS_NW', 65], ['N_IS_NW', 'N_PSB_ENT', 38],
  ['N_PSB_ENT', 'N_PSB_NW', 48], ['N_IS_NW', 'N_FIELD_S', 55],
  ['N_FIELD_S', 'N_MAIN_NW', 58], ['N_MAIN_NW', 'N_MENS_DORM', 48],
  ['N_IS_SW', 'N_CHAPEL', 40], ['N_CHAPEL', 'N_CRFC_ENT', 38],
  ['N_CHAPEL', 'N_SOM_ENT', 32], ['N_SOM_ENT', 'N_WEST_EXIT', 22]
];

/**
 * Computes the shortest path between two graph nodes using Dijkstra's algorithm.
 */
function findShortestPath(startNode, endNode) {
  if (!startNode || !endNode) return [];
  if (startNode === endNode) return [startNode];

  const distances = {};
  const previous = {};
  const unvisited = new Set(Object.keys(GRAPH_NODES));

  for (const node of unvisited) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[startNode] = 0;

  while (unvisited.size > 0) {
    let current = null;
    for (const node of unvisited) {
      if (current === null || distances[node] < distances[current]) current = node;
    }
    if (current === null || current === endNode || distances[current] === Infinity) break;
    unvisited.delete(current);

    for (const [u, v, weight] of GRAPH_EDGES) {
      let neighbor = null;
      if (u === current) neighbor = v;
      else if (v === current) neighbor = u;

      if (neighbor && unvisited.has(neighbor)) {
        const alt = distances[current] + weight;
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = current;
        }
      }
    }
  }

  const path = [];
  let curr = endNode;
  while (curr) {
    path.unshift(curr);
    curr = previous[curr];
  }
  return path[0] === startNode ? path : [];
}

const state = {
  currentView: 'campus',
  currentFloor: 1,
  selectedCategory: 'All',
  searchQuery: '',
  selectedLocationId: null,
  showTrafficFlow: true,
  route: { startId: 'ENTRANCE-MAIN', destId: 'IS-BLDGB', active: false, nodes: [], distanceMeters: 0, minutes: 1, steps: [] },
  zoom: 1,
  pan: { x: 0, y: 0 }
};

window.addEventListener('DOMContentLoaded', () => {
  try {
    populateRouteSelects();
    renderDirectoryList();
    renderScheduleModal();
    setupPanZoom();
    renderMap();
  } catch (err) {
    console.error('Dashboard initialization error:', err);
  }
});

function toggleTrafficFlow() {
  state.showTrafficFlow = !state.showTrafficFlow;
  const btn = document.getElementById('trafficFlowToggleBtn');
  if (!btn) return;
  if (state.showTrafficFlow) {
    btn.classList.remove('bg-slate-100', 'text-slate-600', 'border-slate-200');
    btn.classList.add('bg-amber-50', 'text-amber-800', 'border-amber-300');
  } else {
    btn.classList.add('bg-slate-100', 'text-slate-600', 'border-slate-200');
    btn.classList.remove('bg-amber-50', 'text-amber-800', 'border-amber-300');
  }
  renderMap();
}

function setSidebarTab(tab) {
  const isDir = tab === 'directory';
  const dirPanel = document.getElementById('panel-directory');
  const navPanel = document.getElementById('panel-directions');
  if (dirPanel) {
    dirPanel.classList.toggle('hidden', !isDir);
    dirPanel.classList.toggle('flex', isDir);
  }
  if (navPanel) {
    navPanel.classList.toggle('hidden', isDir);
    navPanel.classList.toggle('flex', !isDir);
  }

  const dirBtn = document.getElementById('tabBtn-directory');
  const navBtn = document.getElementById('tabBtn-directions');

  if (isDir) {
    if (dirBtn) dirBtn.className = 'py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 bg-white text-[#006837] shadow-sm border border-slate-200/80 transition';
    if (navBtn) navBtn.className = 'py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 text-slate-600 hover:text-slate-900 transition';
  } else {
    if (navBtn) navBtn.className = 'py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 bg-white text-[#006837] shadow-sm border border-slate-200/80 transition';
    if (dirBtn) dirBtn.className = 'py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 text-slate-600 hover:text-slate-900 transition';
  }
}

function handleSearch(val) {
  state.searchQuery = val.trim().toLowerCase();
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.classList.toggle('hidden', !state.searchQuery);
  renderDirectoryList();
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  if (input) {
    input.value = '';
    handleSearch('');
    input.focus();
  }
}

function setCategoryFilter(cat) {
  state.selectedCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    const active = btn.dataset.cat === cat;
    btn.className = active
      ? 'cat-pill shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#006837] text-white transition'
      : 'cat-pill shrink-0 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition';
  });
  renderDirectoryList();
}

function renderDirectoryList() {
  const container = document.getElementById('directoryList');
  if (!container) return;

  const filtered = LOCATIONS.filter(loc => {
    const matchesCat = state.selectedCategory === 'All' || loc.category === state.selectedCategory;
    const bName = loc.building ? BUILDINGS[loc.building].name.toLowerCase() : 'neu campus central ave';
    const matchesQuery = !state.searchQuery ||
      loc.code.toLowerCase().includes(state.searchQuery) ||
      loc.name.toLowerCase().includes(state.searchQuery) ||
      loc.category.toLowerCase().includes(state.searchQuery) ||
      bName.includes(state.searchQuery);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="text-center py-10 px-4"><i class="fa-regular fa-face-frown text-2xl text-slate-300 mb-2"></i><p class="text-xs font-semibold text-slate-600">No NEU locations matched "${state.searchQuery}"</p><button onclick="clearSearch(); setCategoryFilter('All')" class="mt-2 text-xs text-[#006837] font-semibold hover:underline">Reset filters</button></div>`;
    return;
  }

  container.innerHTML = filtered.map(loc => {
    const isSelected = state.selectedLocationId === loc.id;
    const bInfo = loc.building ? `${BUILDINGS[loc.building].shortName} • ${loc.floor}F` : 'NEU Campus Grounds';
    const statusColor = loc.status === 'In Class' || loc.status === 'Restricted' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700';

    return `
      <div onclick="selectLocation('${loc.id}', true)" class="p-3 rounded-xl border transition cursor-pointer ${isSelected ? 'border-[#006837] bg-emerald-50/40 shadow-sm' : 'border-slate-200/80 bg-white hover:border-emerald-300 hover:bg-slate-50/70'}">
        <div class="flex items-center justify-between gap-2">
          <span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#172554] text-white">${loc.code}</span>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusColor}">${loc.status}</span>
        </div>
        <h4 class="font-semibold text-sm text-slate-900 mt-1.5 leading-snug">${loc.name}</h4>
        <div class="flex items-center justify-between mt-1.5 text-[11px] text-slate-500">
          <span><i class="fa-solid fa-location-dot text-slate-400 mr-1"></i>${bInfo}</span>
          <span class="text-[#006837] font-semibold">Locate <i class="fa-solid fa-chevron-right text-[9px]"></i></span>
        </div>
      </div>
    `;
  }).join('');
}

function switchView(viewKey) {
  state.currentView = viewKey;
  if (viewKey !== 'campus') state.currentFloor = 1;

  document.querySelectorAll('.view-pill').forEach(btn => {
    btn.className = 'view-pill px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 transition';
  });
  const activePill = document.getElementById(`viewBtn-${viewKey}`);
  if (activePill) activePill.className = 'view-pill px-3 py-1.5 rounded-lg text-xs font-semibold transition bg-white text-[#006837] shadow-sm';

  const mobileSelect = document.getElementById('mobileViewSelect');
  if (mobileSelect) mobileSelect.value = viewKey;

  const sep = document.getElementById('breadcrumbSeparator');
  const cur = document.getElementById('breadcrumbCurrent');
  const floorBar = document.getElementById('floorSelectorBar');

  if (viewKey === 'campus') {
    if (sep) sep.classList.add('hidden');
    if (cur) cur.classList.add('hidden');
    if (floorBar) floorBar.classList.add('hidden');
  } else {
    if (sep) sep.classList.remove('hidden');
    if (cur) {
      cur.classList.remove('hidden');
      cur.textContent = BUILDINGS[viewKey].shortName;
    }
    if (floorBar) floorBar.classList.remove('hidden');
    updateFloorButtons();
  }

  resetZoom();
  renderMap();
}

function setFloor(floorNum) {
  state.currentFloor = floorNum;
  updateFloorButtons();
  renderMap();
}

function updateFloorButtons() {
  [1, 2, 3].forEach(f => {
    const btn = document.getElementById(`floorBtn-${f}`);
    if (!btn) return;
    btn.className = f === state.currentFloor
      ? 'floor-pill px-3 py-1 rounded-xl text-xs font-bold bg-[#006837] text-white transition'
      : 'floor-pill px-3 py-1 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition';
  });
}

function selectLocation(locId, jumpToMap = false) {
  const loc = LOCATIONS.find(l => l.id === locId);
  if (!loc) return;

  state.selectedLocationId = locId;
  renderDirectoryList();

  if (jumpToMap) {
    if (loc.building) {
      switchView(loc.building);
      setFloor(loc.floor);
    } else {
      switchView('campus');
    }
    toggleMobileSidebar(false);
  }

  const card = document.getElementById('locationDetailCard');
  if (card) {
    document.getElementById('detailCodeBadge').textContent = loc.code;
    document.getElementById('detailStatusBadge').textContent = loc.status;
    document.getElementById('detailTitle').textContent = loc.name;
    document.getElementById('detailSubtitle').textContent = loc.building ? `${BUILDINGS[loc.building].name} • Floor ${loc.floor}` : `New Era University Campus • ${loc.category}`;
    document.getElementById('detailDescription').textContent = loc.desc;

    document.getElementById('detailNavigateBtn').onclick = () => {
      const destSelect = document.getElementById('routeDestSelect');
      if (destSelect) destSelect.value = loc.id;
      setSidebarTab('directions');
      toggleMobileSidebar(true);
      calculateAndDrawRoute();
    };

    const floorBtn = document.getElementById('detailOpenFloorBtn');
    if (floorBtn) {
      if (loc.building) {
        floorBtn.classList.remove('hidden');
        floorBtn.textContent = state.currentView === loc.building ? 'Campus Map' : 'View Floor';
        floorBtn.onclick = () => {
          if (state.currentView === loc.building) switchView('campus');
          else {
            switchView(loc.building);
            setFloor(loc.floor);
          }
          selectLocation(loc.id, false);
        };
      } else {
        floorBtn.classList.add('hidden');
      }
    }

    card.classList.remove('hidden');
  }
  renderMap();
}

function closeDetailCard() {
  state.selectedLocationId = null;
  const card = document.getElementById('locationDetailCard');
  if (card) card.classList.add('hidden');
  renderDirectoryList();
  renderMap();
}

function populateRouteSelects() {
  const startSel = document.getElementById('routeStartSelect');
  const destSel = document.getElementById('routeDestSelect');
  if (!startSel || !destSel) return;

  const optionsHtml = LOCATIONS.map(loc => {
    const place = loc.building ? `(${BUILDINGS[loc.building].code} ${loc.floor}F)` : '(Campus)';
    return `<option value="${loc.id}">${loc.code} — ${loc.name} ${place}</option>`;
  }).join('');
  startSel.innerHTML = optionsHtml;
  destSel.innerHTML = optionsHtml;
  startSel.value = state.route.startId;
  destSel.value = state.route.destId;
}

function swapRoutePoints() {
  const startSel = document.getElementById('routeStartSelect');
  const destSel = document.getElementById('routeDestSelect');
  if (!startSel || !destSel) return;
  const temp = startSel.value;
  startSel.value = destSel.value;
  destSel.value = temp;
  calculateAndDrawRoute();
}

function calculateAndDrawRoute() {
  const startSel = document.getElementById('routeStartSelect');
  const destSel = document.getElementById('routeDestSelect');
  if (!startSel || !destSel) return;

  const startId = startSel.value;
  const destId = destSel.value;
  const startLoc = LOCATIONS.find(l => l.id === startId);
  const destLoc = LOCATIONS.find(l => l.id === destId);
  if (!startLoc || !destLoc) return;

  const pathNodes = findShortestPath(startLoc.node, destLoc.node);
  let totalDist = 0;
  for (let i = 0; i < pathNodes.length - 1; i++) {
    const a = GRAPH_NODES[pathNodes[i]];
    const b = GRAPH_NODES[pathNodes[i + 1]];
    totalDist += Math.hypot(b.x - a.x, b.y - a.y) * 0.55;
  }
  if (startLoc.floor && startLoc.floor > 1) totalDist += (startLoc.floor - 1) * 18;
  if (destLoc.floor && destLoc.floor > 1) totalDist += (destLoc.floor - 1) * 18;

  const meters = Math.max(20, Math.round(totalDist));
  const minutes = Math.max(1, Math.round(meters / 65));

  const steps = [
    { icon: 'fa-location-crosshairs', color: 'text-emerald-600 bg-emerald-50', text: `Start at <strong>${startLoc.name}</strong>${startLoc.building ? ` (${BUILDINGS[startLoc.building].shortName}, ${startLoc.floor}F)` : ''}.` }
  ];
  if (startLoc.building && startLoc.floor > 1) {
    steps.push({ icon: 'fa-stairs', color: 'text-slate-600 bg-slate-100', text: `Take the stairs down to the 1st floor exit of <strong>${BUILDINGS[startLoc.building].shortName}</strong>.` });
  }
  if (pathNodes.length > 1) {
    const midLabels = pathNodes.slice(1, -1).map(n => GRAPH_NODES[n].label).filter((v, i, arr) => arr.indexOf(v) === i);
    steps.push({ icon: 'fa-person-walking', color: 'text-[#006837] bg-emerald-50', text: midLabels.length > 0 ? `Follow campus road via <strong>${midLabels.join(' → ')}</strong>.` : `Proceed directly along the campus road to <strong>${GRAPH_NODES[destLoc.node].label}</strong>.` });
  }
  if (destLoc.building) {
    steps.push({ icon: 'fa-door-open', color: 'text-[#006837] bg-emerald-50', text: `Enter <strong>${BUILDINGS[destLoc.building].name}</strong>${destLoc.floor > 1 ? ` and go up to <strong>Floor ${destLoc.floor}</strong>` : ''}.` });
  }
  steps.push({ icon: 'fa-flag-checkered', color: 'text-amber-700 bg-amber-50', text: `Arrive at <strong>${destLoc.name}</strong>.` });

  state.route = { startId, destId, active: true, nodes: pathNodes, distanceMeters: meters, minutes, steps };
  renderRouteSteps();
  switchView('campus');
}

function clearRoute() {
  state.route.active = false;
  state.route.nodes = [];
  const container = document.getElementById('routeStepsContainer');
  if (container) {
    container.innerHTML = `<div class="text-center py-8 px-4 text-slate-400"><div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3"><i class="fa-solid fa-person-walking text-xl"></i></div><p class="text-xs font-medium text-slate-600">Route cleared. Pick a start and destination above.</p></div>`;
  }
  renderMap();
}

function renderRouteSteps() {
  const container = document.getElementById('routeStepsContainer');
  if (!container) return;
  const { distanceMeters, minutes, steps, destId } = state.route;
  const destLoc = LOCATIONS.find(l => l.id === destId);

  container.innerHTML = `
    <div class="p-3.5 rounded-2xl bg-gradient-to-br from-[#006837] to-[#0A5C36] text-white shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <span class="text-[11px] uppercase tracking-wider text-emerald-100 font-semibold">Estimated Campus Route</span>
          <div class="text-xl font-extrabold mt-0.5">${minutes} min <span class="text-xs font-normal text-emerald-100">(${distanceMeters} meters)</span></div>
        </div>
        <div class="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center"><i class="fa-solid fa-person-walking text-lg"></i></div>
      </div>
      ${destLoc && destLoc.building ? `<button onclick="switchView('${destLoc.building}'); setFloor(${destLoc.floor}); toggleMobileSidebar(false)" class="mt-3 w-full py-2 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-semibold text-white transition flex items-center justify-center gap-1.5"><i class="fa-solid fa-layer-group"></i> Inspect ${BUILDINGS[destLoc.building].shortName} (${destLoc.floor}F)</button>` : ''}
    </div>
    <div class="space-y-2.5 pt-1">
      ${steps.map((s, idx) => `<div class="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-100"><div class="w-7 h-7 rounded-lg ${s.color} flex items-center justify-center shrink-0 mt-0.5 text-xs"><i class="fa-solid ${s.icon}"></i></div><div class="text-xs text-slate-700 leading-relaxed"><span class="font-bold text-slate-400 mr-1">${idx + 1}.</span> ${s.text}</div></div>`).join('')}
    </div>
  `;
}

function renderMap() {
  const svg = document.getElementById('campusSvg');
  if (!svg) return;
  svg.innerHTML = state.currentView === 'campus' ? renderCampusOverviewSvg() : renderBuildingFloorSvg(state.currentView, state.currentFloor);
  applyTransform();
}

function renderCampusOverviewSvg() {
  let routeSvg = '';
  if (state.route.active && state.route.nodes.length > 0) {
    const pts = state.route.nodes.map(n => `${GRAPH_NODES[n].x},${GRAPH_NODES[n].y}`).join(' ');
    const startPt = GRAPH_NODES[state.route.nodes[0]];
    const endPt = GRAPH_NODES[state.route.nodes[state.route.nodes.length - 1]];
    routeSvg = `
      <polyline points="${pts}" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.92" />
      <polyline points="${pts}" fill="none" stroke="#006837" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" class="route-path-animated" />
      <circle cx="${startPt.x}" cy="${startPt.y}" r="7.5" fill="#10b981" stroke="#ffffff" stroke-width="2.5" />
      <g transform="translate(${endPt.x}, ${endPt.y})"><circle cx="0" cy="0" r="10" fill="#F4B400" opacity="0.4" class="pin-pulse" /><circle cx="0" cy="0" r="7.5" fill="#F4B400" stroke="#172554" stroke-width="2" /></g>
    `;
  }

  let selectedPinSvg = '';
  if (state.selectedLocationId) {
    const selLoc = LOCATIONS.find(l => l.id === state.selectedLocationId);
    if (selLoc) {
      const coord = selLoc.campusCoord || (selLoc.building ? { x: BUILDINGS[selLoc.building].campusBox.x + BUILDINGS[selLoc.building].campusBox.w / 2, y: BUILDINGS[selLoc.building].campusBox.y + BUILDINGS[selLoc.building].campusBox.h / 2 } : null);
      if (coord) {
        selectedPinSvg = `<g transform="translate(${coord.x}, ${coord.y - 10})"><circle cx="0" cy="10" r="11" fill="#006837" opacity="0.3" class="pin-pulse" /><path d="M0 -18 C-9 -18 -16 -11 -16 -2 C-16 9 0 20 0 20 C0 20 16 9 16 -2 C16 -11 9 -18 0 -18 Z" fill="#006837" stroke="#ffffff" stroke-width="2" /><circle cx="0" cy="-3" r="4.5" fill="#F4B400" /></g>`;
      }
    }
  }

  const trafficFlowSvg = state.showTrafficFlow ? `
    <g id="isTrafficFlowLayer" opacity="0.95">
      <defs><marker id="yellowArrow" markerWidth="6" markerHeight="6" refX="4.5" refY="3" orient="auto"><path d="M0,0.8 L5,3 L0,5.2 L1.2,3 Z" fill="#eab308" stroke="#854d0e" stroke-width="0.4" /></marker></defs>
      <line x1="562" y1="538" x2="562" y2="448" stroke="#facc15" stroke-width="5" marker-end="url(#yellowArrow)" />
      <path d="M 552 434 A 26 26 0 0 0 578 412" fill="none" stroke="#facc15" stroke-width="4.5" marker-end="url(#yellowArrow)" />
      <path d="M 576 402 A 26 26 0 0 0 554 384" fill="none" stroke="#facc15" stroke-width="4.5" marker-end="url(#yellowArrow)" />
      <line x1="585" y1="398" x2="778" y2="398" stroke="#facc15" stroke-width="4.5" marker-end="url(#yellowArrow)" />
      <line x1="784" y1="396" x2="784" y2="376" stroke="#facc15" stroke-width="4.5" marker-end="url(#yellowArrow)" />
      <line x1="780" y1="373" x2="736" y2="373" stroke="#facc15" stroke-width="4.5" marker-end="url(#yellowArrow)" />
      <line x1="731" y1="370" x2="731" y2="303" stroke="#facc15" stroke-width="4.5" marker-end="url(#yellowArrow)" />
      <line x1="726" y1="298" x2="430" y2="298" stroke="#facc15" stroke-width="4.5" marker-end="url(#yellowArrow)" />
      <line x1="423" y1="302" x2="423" y2="386" stroke="#facc15" stroke-width="4.5" marker-end="url(#yellowArrow)" />
      <line x1="418" y1="392" x2="256" y2="392" stroke="#facc15" stroke-width="4.5" marker-end="url(#yellowArrow)" />
      <line x1="248" y1="396" x2="248" y2="536" stroke="#facc15" stroke-width="5" marker-end="url(#yellowArrow)" />
    </g>
  ` : '';

  return `
    <defs><pattern id="courtGrid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="#cbd5e1" stroke-width="0.6"/></pattern></defs>
    <rect x="28" y="18" width="844" height="588" rx="4" fill="#f8fafc" stroke="#2e7d32" stroke-width="10" />
    <text x="645" y="64" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="25" fill="#1e3a8a">New Era University</text>
    <text x="645" y="88" text-anchor="middle" font-family="Inter, sans-serif" font-weight="900" font-size="22" letter-spacing="1" fill="#172554">CAMPUS MAP</text>
    <rect x="76" y="544" width="735" height="36" fill="#9ca3af" />
    <line x1="76" y1="556" x2="811" y2="556" stroke="#e5e7eb" stroke-width="1.5" />
    <line x1="76" y1="568" x2="811" y2="568" stroke="#e5e7eb" stroke-width="1.5" />
    <text x="340" y="564" text-anchor="middle" font-size="7.5" font-weight="800" fill="#1f2937" letter-spacing="0.8">CENTRAL AVENUE</text>
    <text x="720" y="564" text-anchor="middle" font-size="7.5" font-weight="800" fill="#1f2937" letter-spacing="0.8">CENTRAL AVENUE</text>
    <rect x="528" y="432" width="44" height="112" fill="#9ca3af" />
    <circle cx="550" cy="410" r="28" fill="#9ca3af" stroke="#4b5563" stroke-width="1.5" />
    <circle cx="550" cy="410" r="12" fill="#2e7d32" stroke="#ffffff" stroke-width="2" />
    <rect x="190" y="384" width="602" height="18" fill="#9ca3af" />
    <rect x="238" y="398" width="18" height="146" fill="#9ca3af" />
    <rect x="415" y="292" width="16" height="96" fill="#9ca3af" />
    <rect x="415" y="292" width="322" height="14" fill="#9ca3af" />
    <rect x="724" y="292" width="14" height="86" fill="#9ca3af" />
    <rect x="724" y="368" width="68" height="14" fill="#9ca3af" />
    <rect x="778" y="368" width="14" height="34" fill="#9ca3af" />
    <rect x="92" y="102" width="14" height="156" fill="#9ca3af" />
    <rect x="182" y="102" width="14" height="296" fill="#9ca3af" />
    <rect x="92" y="102" width="104" height="12" fill="#9ca3af" />
    <rect x="92" y="250" width="328" height="14" fill="#9ca3af" />
    <rect x="415" y="102" width="14" height="196" fill="#9ca3af" />
    <g onclick="selectLocation('PARK-VISITOR', false)" class="cursor-pointer"><rect x="424" y="408" width="98" height="62" fill="#9ca3af" stroke="#6b7280" stroke-width="1" /><circle cx="473" cy="426" r="8" fill="#e11d48" /><text x="473" y="429.5" text-anchor="middle" font-size="9.5" font-weight="800" fill="#ffffff">P</text><text x="473" y="446" text-anchor="middle" font-size="6.5" font-weight="800" fill="#111827">VISITOR AND STUDENT</text><text x="473" y="454" text-anchor="middle" font-size="6.5" font-weight="800" fill="#111827">PARKING</text></g>
    <g onclick="selectLocation('PARK-FACULTY', false)" class="cursor-pointer"><rect x="594" y="416" width="104" height="82" fill="#9ca3af" stroke="#6b7280" stroke-width="1" /><circle cx="646" cy="432" r="7.5" fill="#e11d48" /><text x="646" y="435" text-anchor="middle" font-size="9" font-weight="800" fill="#ffffff">P</text><text x="646" y="460" text-anchor="middle" font-size="6.5" font-weight="800" fill="#111827">FACULTY AND STAFF</text><text x="646" y="468" text-anchor="middle" font-size="6.5" font-weight="800" fill="#111827">PARKING</text></g>
    <g onclick="selectLocation('PARK-OFFICIAL', false)" class="cursor-pointer"><rect x="706" y="494" width="92" height="38" fill="#9ca3af" stroke="#6b7280" stroke-width="1" /><circle cx="745" cy="505" r="7" fill="#e11d48" /><text x="745" y="508" text-anchor="middle" font-size="8.5" font-weight="800" fill="#ffffff">P</text><text x="752" y="520" text-anchor="middle" font-size="6.5" font-weight="800" fill="#111827">NEU OFFICIAL</text><text x="752" y="528" text-anchor="middle" font-size="6.5" font-weight="800" fill="#111827">PARKING ONLY</text></g>
    <g onclick="selectLocation('LADIES-DORM', false)" class="map-building"><rect x="115" y="34" width="118" height="24" fill="#172554" stroke="#ffffff" stroke-width="1.5" /><text x="174" y="49" text-anchor="middle" font-size="7.5" font-weight="800" fill="#ffffff">LADIES DORM</text></g>
    <g onclick="selectLocation('MENS-DORM', false)" class="map-building"><rect x="440" y="114" width="28" height="122" fill="#172554" stroke="#ffffff" stroke-width="1.5" /><text x="454" y="172" text-anchor="middle" font-size="7" font-weight="800" fill="#ffffff">MEN'S</text><text x="454" y="182" text-anchor="middle" font-size="7" font-weight="800" fill="#ffffff">DORM</text></g>
    <g onclick="selectLocation('OPEN-FIELD', false)" class="map-building"><ellipse cx="304" cy="175" rx="84" ry="54" fill="#2e7d32" stroke="#1b5e20" stroke-width="2" /><ellipse cx="304" cy="175" rx="64" ry="38" fill="none" stroke="#a7f3d0" stroke-width="1.5" /><text x="304" y="178" text-anchor="middle" font-size="8.5" font-weight="800" fill="#ffffff">OPEN FIELD</text></g>
    <g onclick="selectLocation('COVERED-COURT', false)" class="map-building"><text x="478" y="246" text-anchor="middle" font-size="6.5" font-weight="800" fill="#172554">COVERED COURT</text><rect x="436" y="254" width="84" height="34" fill="url(#courtGrid)" stroke="#94a3b8" stroke-width="1.5" /></g>
    <g onclick="selectLocation('CHAPEL', false)" class="map-building"><rect x="282" y="408" width="46" height="82" fill="#172554" stroke="#ffffff" stroke-width="1.5" /><text x="305" y="448" text-anchor="middle" font-size="6.5" font-weight="800" fill="#ffffff">CHAPEL</text></g>
    <g onclick="switchView('PSB')" class="map-building"><rect x="112" y="120" width="62" height="125" fill="#172554" stroke="#ffffff" stroke-width="2" /><text x="143" y="185" text-anchor="middle" font-size="8.5" font-weight="800" fill="#ffffff">PSB</text></g>
    <g onclick="switchView('IS')" class="map-building"><rect x="205" y="278" width="205" height="44" fill="#172554" stroke="#ffffff" stroke-width="2" /><text x="307" y="304" text-anchor="middle" font-size="8.5" font-weight="800" fill="#ffffff">BUILDING B</text><rect x="205" y="322" width="205" height="16" fill="#e2e8f0" stroke="#172554" stroke-width="1.5" /><text x="307" y="333" text-anchor="middle" font-size="7.5" font-weight="900" fill="#172554">INTEGRATED SCHOOL BUILDING</text><rect x="205" y="338" width="205" height="42" fill="#172554" stroke="#ffffff" stroke-width="2" /><text x="307" y="363" text-anchor="middle" font-size="8.5" font-weight="800" fill="#ffffff">BUILDING A</text></g>
    <g onclick="switchView('MAIN')" class="map-building"><rect x="435" y="312" width="280" height="52" fill="#172554" stroke="#ffffff" stroke-width="2" /><text x="575" y="342" text-anchor="middle" font-size="9" font-weight="900" fill="#ffffff">MAIN BUILDING</text></g>
    <g onclick="switchView('CRFC')" class="map-building"><rect x="76" y="422" width="94" height="48" fill="#172554" stroke="#ffffff" stroke-width="2" /><text x="123" y="449" text-anchor="middle" font-size="6.5" font-weight="800" fill="#ffffff">CRFC FITNESS</text></g>
    <g onclick="switchView('SOM')" class="map-building"><rect x="265" y="500" width="165" height="36" fill="#172554" stroke="#ffffff" stroke-width="2" /><text x="347" y="521" text-anchor="middle" font-size="7.5" font-weight="800" fill="#ffffff">SCHOOL OF MANAGEMENT</text></g>
    <g onclick="switchView('LIB')" class="map-building"><rect x="706" y="416" width="68" height="72" fill="#172554" stroke="#ffffff" stroke-width="2" /><text x="740" y="456" text-anchor="middle" font-size="7.5" font-weight="800" fill="#ffffff">LIBRARY</text></g>
    <g onclick="selectLocation('EXIT-WEST', false)" class="cursor-pointer"><rect x="88" y="486" width="84" height="38" rx="8" fill="#60a5fa" stroke="#1e3a8a" stroke-width="1.5" /><text x="130" y="510" text-anchor="middle" font-size="11" font-weight="800" fill="#172554">EXIT</text></g>
    <g onclick="selectLocation('ENTRANCE-MAIN', false)" class="cursor-pointer"><rect x="596" y="486" width="102" height="38" rx="8" fill="#60a5fa" stroke="#1e3a8a" stroke-width="1.5" /><text x="647" y="510" text-anchor="middle" font-size="11" font-weight="800" fill="#172554">ENTRANCE</text></g>
    ${trafficFlowSvg}
    ${routeSvg}
    ${selectedPinSvg}
  `;
}

function renderBuildingFloorSvg(buildingId, floorNum) {
  const building = BUILDINGS[buildingId];
  const floorRooms = LOCATIONS.filter(l => l.building === buildingId && l.floor === floorNum);

  const roomsSvg = floorRooms.map(room => {
    const b = room.floorBox || { x: 100, y: 120, w: 320, h: 125 };
    const isSelected = state.selectedLocationId === room.id;
    const fill = isSelected ? '#dcfce7' : (room.status === 'In Class' ? '#fffbeb' : '#f8fafc');
    const stroke = isSelected ? '#006837' : '#94a3b8';
    return `
      <g onclick="selectLocation('${room.id}', false)" class="room-zone">
        <rect x="${b.x}" y="${b.y}" width="${b.w}" height="${b.h}" rx="14" fill="${fill}" stroke="${stroke}" stroke-width="${isSelected ? 3.5 : 1.8}" />
        <rect x="${b.x + 12}" y="${b.y + 12}" width="84" height="22" rx="6" fill="#172554" />
        <text x="${b.x + 54}" y="${b.y + 26}" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">${room.code}</text>
        <text x="${b.x + 14}" y="${b.y + 54}" font-size="12.5" font-weight="700" fill="#0f172a">${room.name.length > 34 ? room.name.slice(0, 32) + '...' : room.name}</text>
        <text x="${b.x + 14}" y="${b.y + 74}" font-size="11" fill="#64748b">${room.category}</text>
        <text x="${b.x + 14}" y="${b.y + b.h - 14}" font-size="10.5" font-weight="700" fill="${room.status === 'In Class' ? '#b45309' : '#006837'}">● ${room.status}</text>
      </g>
    `;
  }).join('');

  return `
    <text x="450" y="34" text-anchor="middle" font-size="16" font-weight="800" fill="#172554">${building.name}</text>
    <text x="450" y="54" text-anchor="middle" font-size="12" font-weight="600" fill="#006837">Floor ${floorNum} Blueprint — Click any room to view details or directions</text>
    <rect x="65" y="75" width="770" height="450" rx="26" fill="#ffffff" stroke="#172554" stroke-width="3" />
    <rect x="85" y="255" width="730" height="48" rx="10" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1" />
    <text x="450" y="284" text-anchor="middle" font-size="11" font-weight="800" letter-spacing="3" fill="#94a3b8">MAIN CORRIDOR • FLOOR ${floorNum}</text>
    <rect x="385" y="505" width="130" height="24" rx="8" fill="#006837" />
    <text x="450" y="521" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">BUILDING ENTRANCE</text>
    ${roomsSvg}
  `;
}

function renderScheduleModal() {
  const container = document.getElementById('scheduleListContainer');
  if (!container) return;
  container.innerHTML = STUDENT_SCHEDULE.map(item => `
    <div class="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-emerald-50/40 hover:border-emerald-200 transition flex items-center justify-between gap-3">
      <div>
        <div class="flex items-center gap-2"><span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#006837] text-white">${item.code}</span><span class="text-[11px] font-semibold text-slate-500">${item.time}</span></div>
        <h4 class="font-bold text-sm text-slate-900 mt-1">${item.title}</h4>
        <p class="text-xs text-slate-500 mt-0.5"><i class="fa-solid fa-location-dot text-[#006837] mr-1"></i>${item.roomLabel}</p>
      </div>
      <button onclick="jumpToScheduledRoom('${item.roomId}')" class="shrink-0 py-2 px-3 rounded-xl bg-[#006837] hover:bg-[#00522B] text-white text-xs font-semibold shadow-sm transition flex items-center gap-1"><i class="fa-solid fa-diamond-turn-right"></i> Go</button>
    </div>
  `).join('');
}

function openScheduleModal() {
  const modal = document.getElementById('scheduleModal');
  if (modal) modal.classList.remove('hidden');
}

function closeScheduleModal() {
  const modal = document.getElementById('scheduleModal');
  if (modal) modal.classList.add('hidden');
}

function jumpToScheduledRoom(roomId) {
  closeScheduleModal();
  const destSelect = document.getElementById('routeDestSelect');
  if (destSelect) destSelect.value = roomId;
  setSidebarTab('directions');
  calculateAndDrawRoute();
}

function toggleMobileSidebar(forceState) {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  if (!sidebar || !backdrop) return;
  const isClosed = sidebar.classList.contains('-translate-x-full');
  const shouldOpen = typeof forceState === 'boolean' ? forceState : isClosed;
  sidebar.classList.toggle('-translate-x-full', !shouldOpen);
  backdrop.classList.toggle('hidden', !shouldOpen);
}

function adjustZoom(delta) {
  state.zoom = Math.min(2.4, Math.max(0.75, +(state.zoom + delta).toFixed(2)));
  applyTransform();
}

function resetZoom() {
  state.zoom = 1;
  state.pan = { x: 0, y: 0 };
  applyTransform();
}

function applyTransform() {
  const svg = document.getElementById('campusSvg');
  const zoomBtn = document.getElementById('zoomLevelBtn');
  if (zoomBtn) zoomBtn.textContent = `${Math.round(state.zoom * 100)}%`;
  if (svg) svg.style.transform = `translate(${state.pan.x}px, ${state.pan.y}px) scale(${state.zoom})`;
}

function setupPanZoom() {
  const viewport = document.getElementById('mapViewport');
  if (!viewport) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialPinchDistance = null;
  let initialZoom = 1;

  viewport.addEventListener('mousedown', (e) => {
    if (e.target.closest('.map-building') || e.target.closest('.room-zone') || e.target.closest('.cursor-pointer')) return;
    isDragging = true;
    startX = e.clientX - state.pan.x;
    startY = e.clientY - state.pan.y;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    state.pan.x = e.clientX - startX;
    state.pan.y = e.clientY - startY;
    applyTransform();
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      if (e.target.closest('.map-building') || e.target.closest('.room-zone') || e.target.closest('.cursor-pointer')) return;
      isDragging = true;
      startX = e.touches[0].clientX - state.pan.x;
      startY = e.touches[0].clientY - state.pan.y;
    } else if (e.touches.length === 2) {
      isDragging = false;
      initialPinchDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      initialZoom = state.zoom;
    }
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && isDragging) {
      state.pan.x = e.touches[0].clientX - startX;
      state.pan.y = e.touches[0].clientY - startY;
      applyTransform();
    } else if (e.touches.length === 2 && initialPinchDistance) {
      const currentDistance = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      state.zoom = Math.min(2.4, Math.max(0.75, +(initialZoom * (currentDistance / initialPinchDistance)).toFixed(2)));
      applyTransform();
    }
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    isDragging = false;
    initialPinchDistance = null;
  });

  viewport.addEventListener('wheel', (e) => {
    e.preventDefault();
    adjustZoom(e.deltaY < 0 ? 0.12 : -0.12);
  }, { passive: false });
}