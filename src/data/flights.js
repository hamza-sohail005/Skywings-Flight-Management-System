export const FLIGHTS_DB = [
  // KHI → LHE
  { id:1,  num:'PK-301', airline:'PIA',             emoji:'🇵🇰', from:'KHI', to:'LHE', dep:'06:00', arr:'07:10', duration:'1h 10m', stops:'Direct',  economy_price:9500,   seats:45 },
  { id:2,  num:'PA-205', airline:'AirBlue',          emoji:'💙',  from:'KHI', to:'LHE', dep:'08:30', arr:'09:45', duration:'1h 15m', stops:'Direct',  economy_price:11200,  seats:28 },
  { id:3,  num:'ER-101', airline:'SereneAir',        emoji:'☁️',  from:'KHI', to:'LHE', dep:'12:15', arr:'13:30', duration:'1h 15m', stops:'Direct',  economy_price:10800,  seats:0  },
  { id:4,  num:'PK-405', airline:'PIA',              emoji:'🇵🇰', from:'KHI', to:'LHE', dep:'15:00', arr:'16:20', duration:'1h 20m', stops:'Direct',  economy_price:8700,   seats:62 },
  // LHE → KHI
  { id:5,  num:'PK-302', airline:'PIA',              emoji:'🇵🇰', from:'LHE', to:'KHI', dep:'09:00', arr:'10:10', duration:'1h 10m', stops:'Direct',  economy_price:9200,   seats:40 },
  { id:6,  num:'PA-206', airline:'AirBlue',          emoji:'💙',  from:'LHE', to:'KHI', dep:'14:00', arr:'15:15', duration:'1h 15m', stops:'Direct',  economy_price:10800,  seats:18 },
  // KHI → ISB
  { id:7,  num:'PK-501', airline:'PIA',              emoji:'🇵🇰', from:'KHI', to:'ISB', dep:'07:30', arr:'09:00', duration:'1h 30m', stops:'Direct',  economy_price:12500,  seats:35 },
  { id:8,  num:'PA-401', airline:'AirBlue',          emoji:'💙',  from:'KHI', to:'ISB', dep:'11:00', arr:'12:30', duration:'1h 30m', stops:'Direct',  economy_price:13800,  seats:22 },
  // ISB → KHI
  { id:9,  num:'PK-502', airline:'PIA',              emoji:'🇵🇰', from:'ISB', to:'KHI', dep:'10:00', arr:'11:30', duration:'1h 30m', stops:'Direct',  economy_price:12000,  seats:28 },
  // LHE → ISB
  { id:10, num:'PK-601', airline:'PIA',              emoji:'🇵🇰', from:'LHE', to:'ISB', dep:'08:00', arr:'09:00', duration:'1h 00m', stops:'Direct',  economy_price:7500,   seats:50 },
  // KHI → DXB
  { id:11, num:'EK-608', airline:'Emirates',         emoji:'🌟',  from:'KHI', to:'DXB', dep:'14:10', arr:'17:00', duration:'2h 50m', stops:'Direct',  economy_price:52000,  seats:8  },
  { id:12, num:'QR-712', airline:'Qatar Airways',    emoji:'🔴',  from:'KHI', to:'DXB', dep:'22:30', arr:'01:40', duration:'3h 10m', stops:'1 Stop',  economy_price:46500,  seats:35 },
  { id:13, num:'EY-242', airline:'Etihad',           emoji:'🟡',  from:'KHI', to:'DXB', dep:'10:00', arr:'12:40', duration:'2h 40m', stops:'Direct',  economy_price:48000,  seats:20 },
  // LHE → DXB
  { id:14, num:'EK-622', airline:'Emirates',         emoji:'🌟',  from:'LHE', to:'DXB', dep:'09:00', arr:'12:30', duration:'3h 30m', stops:'Direct',  economy_price:44000,  seats:15 },
  { id:15, num:'PA-701', airline:'AirBlue',          emoji:'💙',  from:'LHE', to:'DXB', dep:'19:00', arr:'22:30', duration:'3h 30m', stops:'Direct',  economy_price:41000,  seats:30 },
  // ISB → DXB
  { id:16, num:'EK-612', airline:'Emirates',         emoji:'🌟',  from:'ISB', to:'DXB', dep:'08:30', arr:'11:30', duration:'3h 00m', stops:'Direct',  economy_price:49000,  seats:12 },
  // ISB → IST
  { id:17, num:'TK-709', airline:'Turkish Airlines', emoji:'🇹🇷', from:'ISB', to:'IST', dep:'03:15', arr:'09:00', duration:'5h 45m', stops:'Direct',  economy_price:96000,  seats:22 },
  { id:18, num:'TK-711', airline:'Turkish Airlines', emoji:'🇹🇷', from:'ISB', to:'IST', dep:'14:00', arr:'19:45', duration:'5h 45m', stops:'Direct',  economy_price:102000, seats:9  },
  // KHI → IST
  { id:19, num:'TK-719', airline:'Turkish Airlines', emoji:'🇹🇷', from:'KHI', to:'IST', dep:'05:00', arr:'11:30', duration:'6h 30m', stops:'Direct',  economy_price:98000,  seats:18 },
  // KHI → LHR
  { id:20, num:'PK-757', airline:'PIA',              emoji:'🇵🇰', from:'KHI', to:'LDN', dep:'01:30', arr:'11:00', duration:'9h 30m', stops:'Direct',  economy_price:185000, seats:25 },
  { id:21, num:'EK-002', airline:'Emirates',         emoji:'🌟',  from:'KHI', to:'LDN', dep:'14:00', arr:'00:30', duration:'10h 30m',stops:'1 Stop',  economy_price:178000, seats:14 },
  // LHE → LHR
  { id:22, num:'PK-785', airline:'PIA',              emoji:'🇵🇰', from:'LHE', to:'LDN', dep:'02:00', arr:'13:00', duration:'11h 00m',stops:'Direct',  economy_price:190000, seats:20 },
  // ISB → DOH
  { id:23, num:'QR-516', airline:'Qatar Airways',    emoji:'🔴',  from:'ISB', to:'DOH', dep:'07:00', arr:'10:55', duration:'3h 55m', stops:'Direct',  economy_price:55000,  seats:38 },
  { id:24, num:'QR-518', airline:'Qatar Airways',    emoji:'🔴',  from:'ISB', to:'DOH', dep:'18:30', arr:'22:25', duration:'3h 55m', stops:'Direct',  economy_price:58000,  seats:6  },
  // KHI → DOH
  { id:25, num:'QR-502', airline:'Qatar Airways',    emoji:'🔴',  from:'KHI', to:'DOH', dep:'09:30', arr:'12:00', duration:'2h 30m', stops:'Direct',  economy_price:51000,  seats:30 },
  // KHI → AUH
  { id:26, num:'EY-241', airline:'Etihad',           emoji:'🟡',  from:'KHI', to:'AUH', dep:'11:00', arr:'13:30', duration:'2h 30m', stops:'Direct',  economy_price:47000,  seats:24 },
  // KHI → RUH
  { id:27, num:'SV-720', airline:'Saudia',           emoji:'🟢',  from:'KHI', to:'RUH', dep:'08:00', arr:'11:00', duration:'3h 00m', stops:'Direct',  economy_price:62000,  seats:45 },
  // KHI → YYZ
  { id:28, num:'PK-781', airline:'PIA',              emoji:'🇵🇰', from:'KHI', to:'TO', dep:'03:00', arr:'23:00', duration:'20h 00m',stops:'1 Stop',  economy_price:320000, seats:10 },
  // DXB → KHI
  { id:29, num:'EK-609', airline:'Emirates',         emoji:'🌟',  from:'DXB', to:'KHI', dep:'08:00', arr:'12:00', duration:'2h 00m', stops:'Direct',  economy_price:50000,  seats:16 },
  // DOH → ISB
  { id:30, num:'QR-517', airline:'Qatar Airways',    emoji:'🔴',  from:'DOH', to:'ISB', dep:'12:00', arr:'16:55', duration:'4h 55m', stops:'Direct',  economy_price:57000,  seats:22 },

  // ===== MISSING ROUTES ADDED =====
  // DOH ↔ DXB
  { id:31, num:'QR-401', airline:'Qatar Airways',    emoji:'🔴', from:'DOH', to:'DXB', dep:'07:00', arr:'08:30', duration:'1h 30m', stops:'Direct',  economy_price:28000,  seats:40 },
  { id:32, num:'QR-403', airline:'Qatar Airways',    emoji:'🔴', from:'DOH', to:'DXB', dep:'15:30', arr:'17:00', duration:'1h 30m', stops:'Direct',  economy_price:31000,  seats:18 },
  { id:33, num:'EK-101', airline:'Emirates',         emoji:'🌟', from:'DXB', to:'DOH', dep:'09:00', arr:'10:30', duration:'1h 30m', stops:'Direct',  economy_price:29000,  seats:25 },
  // DOH ↔ KHI (return)
  { id:34, num:'QR-503', airline:'Qatar Airways',    emoji:'🔴', from:'DOH', to:'KHI', dep:'14:00', arr:'18:00', duration:'2h 30m', stops:'Direct',  economy_price:50000,  seats:30 },
  // DOH ↔ LHE
  { id:35, num:'QR-551', airline:'Qatar Airways',    emoji:'🔴', from:'DOH', to:'LHE', dep:'10:00', arr:'15:00', duration:'3h 30m', stops:'Direct',  economy_price:48000,  seats:22 },
  { id:36, num:'QR-552', airline:'Qatar Airways',    emoji:'🔴', from:'LHE', to:'DOH', dep:'16:00', arr:'19:00', duration:'3h 00m', stops:'Direct',  economy_price:46000,  seats:28 },
  // DOH ↔ IST
  { id:37, num:'QR-201', airline:'Qatar Airways',    emoji:'🔴', from:'DOH', to:'IST', dep:'08:00', arr:'13:00', duration:'5h 00m', stops:'Direct',  economy_price:85000,  seats:15 },
  { id:38, num:'TK-801', airline:'Turkish Airlines', emoji:'🇹🇷', from:'IST', to:'DOH', dep:'09:00', arr:'14:00', duration:'5h 00m', stops:'Direct',  economy_price:88000,  seats:20 },
  // DOH ↔ LHR
  { id:39, num:'QR-001', airline:'Qatar Airways',    emoji:'🔴', from:'DOH', to:'LDN', dep:'07:30', arr:'13:30', duration:'6h 00m', stops:'Direct',  economy_price:145000, seats:30 },
  { id:40, num:'QR-002', airline:'Qatar Airways',    emoji:'🔴', from:'LDN', to:'DOH', dep:'21:00', arr:'06:00', duration:'7h 00m', stops:'Direct',  economy_price:148000, seats:25 },
  // DXB ↔ IST
  { id:41, num:'EK-119', airline:'Emirates',         emoji:'🌟', from:'DXB', to:'IST', dep:'10:00', arr:'14:00', duration:'4h 00m', stops:'Direct',  economy_price:72000,  seats:18 },
  { id:42, num:'TK-820', airline:'Turkish Airlines', emoji:'🇹🇷', from:'IST', to:'DXB', dep:'06:00', arr:'11:00', duration:'5h 00m', stops:'Direct',  economy_price:75000,  seats:12 },
  // DXB ↔ LHR
  { id:43, num:'EK-003', airline:'Emirates',         emoji:'🌟', from:'DXB', to:'LDN', dep:'08:00', arr:'13:30', duration:'7h 30m', stops:'Direct',  economy_price:110000, seats:35 },
  { id:44, num:'EK-004', airline:'Emirates',         emoji:'🌟', from:'LDN', to:'DXB', dep:'14:00', arr:'01:00', duration:'7h 00m', stops:'Direct',  economy_price:108000, seats:22 },
  // DXB ↔ LHE (return)
  { id:45, num:'EK-623', airline:'Emirates',         emoji:'🌟', from:'DXB', to:'LHE', dep:'16:00', arr:'19:30', duration:'3h 30m', stops:'Direct',  economy_price:43000,  seats:20 },
  // DXB ↔ ISB (return)
  { id:46, num:'EK-613', airline:'Emirates',         emoji:'🌟', from:'DXB', to:'ISB', dep:'15:00', arr:'18:00', duration:'3h 00m', stops:'Direct',  economy_price:47000,  seats:16 },
  // IST ↔ KHI (return)
  { id:47, num:'TK-710', airline:'Turkish Airlines', emoji:'🇹🇷', from:'IST', to:'KHI', dep:'10:00', arr:'16:30', duration:'6h 30m', stops:'Direct',  economy_price:95000,  seats:20 },
  // IST ↔ LHR
  { id:48, num:'TK-901', airline:'Turkish Airlines', emoji:'🇹🇷', from:'IST', to:'LDN', dep:'07:00', arr:'10:00', duration:'4h 00m', stops:'Direct',  economy_price:68000,  seats:30 },
  { id:49, num:'TK-902', airline:'Turkish Airlines', emoji:'🇹🇷', from:'LDN', to:'IST', dep:'13:00', arr:'19:00', duration:'4h 00m', stops:'Direct',  economy_price:70000,  seats:25 },
  // IST ↔ ISB (return)
  { id:50, num:'TK-712', airline:'Turkish Airlines', emoji:'🇹🇷', from:'IST', to:'ISB', dep:'20:00', arr:'01:45', duration:'5h 45m', stops:'Direct',  economy_price:94000,  seats:18 },
  // LHR ↔ KHI (return)
  { id:51, num:'PK-758', airline:'PIA',              emoji:'🇵🇰', from:'LDN', to:'KHI', dep:'14:30', arr:'04:00', duration:'9h 30m', stops:'Direct',  economy_price:182000, seats:22 },
  // LHR ↔ LHE (return)
  { id:52, num:'PK-786', airline:'PIA',              emoji:'🇵🇰', from:'LDN', to:'LHE', dep:'15:00', arr:'04:30', duration:'9h 30m', stops:'Direct',  economy_price:188000, seats:18 },
  // LHR ↔ ISB
  { id:53, num:'PK-762', airline:'PIA',              emoji:'🇵🇰', from:'KHI', to:'LDN', dep:'23:00', arr:'08:30', duration:'9h 30m', stops:'Direct',  economy_price:186000, seats:14 },
  { id:54, num:'PK-763', airline:'PIA',              emoji:'🇵🇰', from:'LDN', to:'ISB', dep:'20:00', arr:'07:00', duration:'9h 00m', stops:'Direct',  economy_price:185000, seats:16 },
  // AUH ↔ others
  { id:55, num:'EY-242', airline:'Etihad',           emoji:'🟡', from:'AUH', to:'KHI', dep:'14:00', arr:'17:30', duration:'2h 30m', stops:'Direct',  economy_price:46000,  seats:30 },
  { id:56, num:'EY-301', airline:'Etihad',           emoji:'🟡', from:'AUH', to:'LHE', dep:'10:00', arr:'14:00', duration:'4h 00m', stops:'Direct',  economy_price:44000,  seats:22 },
  { id:57, num:'EY-302', airline:'Etihad',           emoji:'🟡', from:'LHE', to:'AUH', dep:'20:00', arr:'23:30', duration:'3h 30m', stops:'Direct',  economy_price:42000,  seats:28 },
  { id:58, num:'EY-401', airline:'Etihad',           emoji:'🟡', from:'AUH', to:'ISB', dep:'08:00', arr:'11:30', duration:'3h 30m', stops:'Direct',  economy_price:48000,  seats:20 },
  { id:59, num:'EY-402', airline:'Etihad',           emoji:'🟡', from:'ISB', to:'AUH', dep:'19:00', arr:'22:30', duration:'3h 30m', stops:'Direct',  economy_price:47000,  seats:15 },
  { id:60, num:'EY-501', airline:'Etihad',           emoji:'🟡', from:'AUH', to:'DXB', dep:'09:00', arr:'09:45', duration:'0h 45m', stops:'Direct',  economy_price:15000,  seats:50 },
  { id:61, num:'EY-502', airline:'Etihad',           emoji:'🟡', from:'DXB', to:'AUH', dep:'11:00', arr:'11:45', duration:'0h 45m', stops:'Direct',  economy_price:15000,  seats:50 },
  // RUH ↔ others
  { id:62, num:'SV-721', airline:'Saudia',           emoji:'🟢', from:'RUH', to:'KHI', dep:'14:00', arr:'18:00', duration:'3h 00m', stops:'Direct',  economy_price:60000,  seats:40 },
  { id:63, num:'SV-730', airline:'Saudia',           emoji:'🟢', from:'RUH', to:'LHE', dep:'09:00', arr:'13:30', duration:'3h 30m', stops:'Direct',  economy_price:58000,  seats:35 },
  { id:64, num:'SV-731', airline:'Saudia',           emoji:'🟢', from:'LHE', to:'RUH', dep:'20:00', arr:'23:00', duration:'3h 00m', stops:'Direct',  economy_price:57000,  seats:30 },
  { id:65, num:'SV-740', airline:'Saudia',           emoji:'🟢', from:'RUH', to:'DXB', dep:'10:00', arr:'11:30', duration:'1h 30m', stops:'Direct',  economy_price:22000,  seats:45 },
  { id:66, num:'SV-741', airline:'Saudia',           emoji:'🟢', from:'DXB', to:'RUH', dep:'13:00', arr:'14:30', duration:'1h 30m', stops:'Direct',  economy_price:23000,  seats:40 },
  // YYZ ↔ others
  { id:67, num:'PK-782', airline:'PIA',              emoji:'🇵🇰', from:'TO', to:'KHI', dep:'20:00', arr:'18:00', duration:'18h 00m',stops:'1 Stop', economy_price:310000, seats:8  },
  { id:68, num:'AC-801', airline:'Air Canada',       emoji:'🍁',  from:'TO', to:'LDN', dep:'19:00', arr:'07:00', duration:'8h 00m', stops:'Direct',  economy_price:185000, seats:20 },
  { id:69, num:'AC-802', airline:'Air Canada',       emoji:'🍁',  from:'LDN', to:'TO', dep:'10:00', arr:'13:00', duration:'9h 00m', stops:'Direct',  economy_price:182000, seats:18 },
  // ISB ↔ LHE (return)
  { id:70, num:'PK-602', airline:'PIA',              emoji:'🇵🇰', from:'ISB', to:'LHE', dep:'10:00', arr:'11:00', duration:'1h 00m', stops:'Direct',  economy_price:7200,   seats:45 },
  // ===== ALL REMAINING MISSING ROUTES =====
  // DOH ↔ AUH
  { id:71, num:'QR-411', airline:'Qatar Airways',    emoji:'🔴', from:'DOH', to:'AUH', dep:'08:00', arr:'09:30', duration:'1h 30m', stops:'Direct', economy_price:25000, seats:35 },
  { id:72, num:'EY-511', airline:'Etihad',           emoji:'🟡', from:'AUH', to:'DOH', dep:'11:00', arr:'12:30', duration:'1h 30m', stops:'Direct', economy_price:24000, seats:40 },
  // DOH ↔ RUH
  { id:73, num:'QR-421', airline:'Qatar Airways',    emoji:'🔴', from:'DOH', to:'RUH', dep:'09:00', arr:'10:30', duration:'1h 30m', stops:'Direct', economy_price:20000, seats:45 },
  { id:74, num:'SV-751', airline:'Saudia',           emoji:'🟢', from:'RUH', to:'DOH', dep:'13:00', arr:'14:30', duration:'1h 30m', stops:'Direct', economy_price:21000, seats:38 },
  // DOH ↔ YYZ
  { id:75, num:'QR-141', airline:'Qatar Airways',    emoji:'🔴', from:'DOH', to:'TO', dep:'07:00', arr:'16:00', duration:'15h 00m',stops:'Direct', economy_price:280000,seats:18 },
  { id:76, num:'QR-142', airline:'Qatar Airways',    emoji:'🔴', from:'TO', to:'DOH', dep:'21:00', arr:'17:00', duration:'14h 00m',stops:'Direct', economy_price:275000,seats:15 },
  // AUH ↔ DOH
  { id:77, num:'EY-512', airline:'Etihad',           emoji:'🟡', from:'DOH', to:'AUH', dep:'16:00', arr:'17:30', duration:'1h 30m', stops:'Direct', economy_price:26000, seats:30 },
  // AUH ↔ IST
  { id:78, num:'EY-601', airline:'Etihad',           emoji:'🟡', from:'AUH', to:'IST', dep:'07:00', arr:'11:00', duration:'4h 00m', stops:'Direct', economy_price:70000, seats:22 },
  { id:79, num:'TK-811', airline:'Turkish Airlines', emoji:'🇹🇷', from:'IST', to:'AUH', dep:'14:00', arr:'18:30', duration:'4h 30m', stops:'Direct', economy_price:72000, seats:18 },
  // AUH ↔ LHR
  { id:80, num:'EY-001', airline:'Etihad',           emoji:'🟡', from:'AUH', to:'LDN', dep:'09:00', arr:'14:00', duration:'7h 00m', stops:'Direct', economy_price:115000,seats:28 },
  { id:81, num:'EY-002', airline:'Etihad',           emoji:'🟡', from:'LDN', to:'AUH', dep:'20:00', arr:'07:00', duration:'7h 00m', stops:'Direct', economy_price:112000,seats:24 },
  // AUH ↔ YYZ
  { id:82, num:'EY-101', airline:'Etihad',           emoji:'🟡', from:'AUH', to:'TO', dep:'08:00', arr:'17:00', duration:'15h 00m',stops:'Direct', economy_price:260000,seats:12 },
  // AUH ↔ RUH
  { id:83, num:'EY-551', airline:'Etihad',           emoji:'🟡', from:'AUH', to:'RUH', dep:'10:00', arr:'11:30', duration:'1h 30m', stops:'Direct', economy_price:18000, seats:45 },
  { id:84, num:'SV-761', airline:'Saudia',           emoji:'🟢', from:'RUH', to:'AUH', dep:'14:00', arr:'15:30', duration:'1h 30m', stops:'Direct', economy_price:19000, seats:40 },
  // RUH ↔ ISB
  { id:85, num:'SV-711', airline:'Saudia',           emoji:'🟢', from:'RUH', to:'ISB', dep:'08:00', arr:'12:00', duration:'4h 00m', stops:'Direct', economy_price:65000, seats:30 },
  { id:86, num:'SV-712', airline:'Saudia',           emoji:'🟢', from:'ISB', to:'RUH', dep:'14:00', arr:'17:00', duration:'3h 00m', stops:'Direct', economy_price:63000, seats:28 },
  // RUH ↔ IST
  { id:87, num:'SV-771', airline:'Saudia',           emoji:'🟢', from:'RUH', to:'IST', dep:'09:00', arr:'13:00', duration:'4h 00m', stops:'Direct', economy_price:58000, seats:35 },
  { id:88, num:'TK-831', airline:'Turkish Airlines', emoji:'🇹🇷', from:'IST', to:'RUH', dep:'15:00', arr:'20:00', duration:'5h 00m', stops:'Direct', economy_price:60000, seats:20 },
  // RUH ↔ LHR
  { id:89, num:'SV-101', airline:'Saudia',           emoji:'🟢', from:'RUH', to:'LDN', dep:'08:30', arr:'14:30', duration:'6h 00m', stops:'Direct', economy_price:130000,seats:25 },
  { id:90, num:'SV-102', airline:'Saudia',           emoji:'🟢', from:'LDN', to:'RUH', dep:'22:00', arr:'07:00', duration:'7h 00m', stops:'Direct', economy_price:128000,seats:20 },
  // RUH ↔ YYZ
  { id:91, num:'SV-111', airline:'Saudia',           emoji:'🟢', from:'RUH', to:'TO', dep:'09:00', arr:'19:00', duration:'16h 00m',stops:'1 Stop', economy_price:310000,seats:10 },
  // YYZ ↔ DXB
  { id:92, num:'EK-241', airline:'Emirates',         emoji:'🌟', from:'TO', to:'DXB', dep:'22:00', arr:'19:00', duration:'13h 00m',stops:'Direct', economy_price:295000,seats:14 },
  { id:93, num:'EK-242', airline:'Emirates',         emoji:'🌟', from:'DXB', to:'TO', dep:'09:00', arr:'18:00', duration:'15h 00m',stops:'Direct', economy_price:290000,seats:12 },
  // YYZ ↔ IST
  { id:94, num:'TK-011', airline:'Turkish Airlines', emoji:'🇹🇷', from:'TO', to:'IST', dep:'19:00', arr:'14:00', duration:'10h 00m',stops:'Direct', economy_price:220000,seats:16 },
  { id:95, num:'TK-012', airline:'Turkish Airlines', emoji:'🇹🇷', from:'IST', to:'TO', dep:'15:00', arr:'20:00', duration:'12h 00m',stops:'Direct', economy_price:218000,seats:14 },
  // YYZ ↔ DOH
  { id:96, num:'QR-143', airline:'Qatar Airways',    emoji:'🔴', from:'TO', to:'DOH', dep:'20:00', arr:'16:00', duration:'14h 00m',stops:'Direct', economy_price:272000,seats:12 },
  // YYZ ↔ ISB
  { id:97, num:'PK-783', airline:'PIA',              emoji:'🇵🇰', from:'TO', to:'ISB', dep:'21:00', arr:'20:00', duration:'19h 00m',stops:'1 Stop', economy_price:315000,seats:8  },
  // LHR ↔ AUH
  { id:98, num:'EY-003', airline:'Etihad',           emoji:'🟡', from:'LDN', to:'AUH', dep:'14:00', arr:'01:00', duration:'7h 00m', stops:'Direct', economy_price:113000,seats:22 },
  // IST ↔ LHE
  { id:99, num:'TK-851', airline:'Turkish Airlines', emoji:'🇹🇷', from:'IST', to:'LHE', dep:'11:00', arr:'17:00', duration:'6h 00m', stops:'Direct', economy_price:90000, seats:18 },
  { id:100,num:'TK-852', airline:'Turkish Airlines', emoji:'🇹🇷', from:'LHE', to:'IST', dep:'01:00', arr:'06:00', duration:'7h 00m', stops:'Direct', economy_price:88000, seats:20 },

  // ===== FINAL 6 MISSING ROUTES =====
  { id:101, num:'PK-791', airline:'PIA',              emoji:'🇵🇰', from:'LHE', to:'TO', dep:'02:00', arr:'18:00', duration:'20h 00m', stops:'1 Stop', economy_price:325000, seats:8  },
  { id:102, num:'PK-792', airline:'PIA',              emoji:'🇵🇰', from:'TO', to:'LHE', dep:'20:30', arr:'20:00', duration:'19h 00m', stops:'1 Stop', economy_price:318000, seats:7  },
  { id:103, num:'PK-761', airline:'PIA',              emoji:'🇵🇰', from:'ISB', to:'LDN', dep:'03:00', arr:'12:30', duration:'9h 30m',  stops:'Direct', economy_price:183000, seats:18 },
  { id:104, num:'PK-793', airline:'PIA',              emoji:'🇵🇰', from:'ISB', to:'TO', dep:'04:00', arr:'20:00', duration:'20h 00m', stops:'1 Stop', economy_price:320000, seats:6  },
  { id:105, num:'EY:551', airline:'Etihad',           emoji:'🟡', from:'TO', to:'AUH', dep:'21:30', arr:'19:30', duration:'14h 00m', stops:'Direct', economy_price:258000, seats:10 },
  { id:106, num:'SV-112', airline:'Saudia',           emoji:'🟢', from:'TO', to:'RUH', dep:'20:00', arr:'16:00', duration:'16h 00m', stops:'1 Stop', economy_price:305000, seats:9  },
];