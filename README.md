# Computerized Hostel Allocation Management System

**Case Study:** Joint Professional Training & Support International (JPTS) – Ibadan Centre  
**Author:** Otukoya-Adejuwon David Oluwapelumi (`GWU/BSC/CS/2020/33873`)  
**Institution:** Department of Computer Science, Global Wealth University, Lomé, Togo  
**Supervisor:** Engr. Femi Ayandokun  

---

## 1. Live Web Application

- **Live URL:** [http://localhost:3000](http://localhost:3000)
- **Source File:** [`index.html`](file:///home/lock-in/.gemini/antigravity/scratch/hostel-allocation-system/index.html)
- **Design System:** Variant Frosted Glass & Monochrome Black & White with Instant White Mode Switch

---

## 2. Implemented Modules & Architecture

The web application transforms the desktop thesis architecture into a reactive, high-end portal incorporating all five modules and relational database tables:

### 2.1 Authentication Module (`frmLogin`)
- Authenticates against the `users` table credentials.
- Role switching for **Student** vs. **Porter / Administrator**.
- 1-Click test accounts:
  - **David Otukoya-Adejuwon (Student/Author):** `GWU/BSC/CS/2020/33873` / `password123` (Male, Computer Science, 400L)
  - **Amina Bello (Student):** `JPTS/IB/2021/4102` / `password123` (Female, Business Admin, 200L)
  - **Engr. Femi Ayandokun / Chief Porter:** `admin` / `admin123` (Administrator / Staff)

### 2.2 Student Room & Bed Selection ("Do NOT allocate any space yet" rule)
- Students browse the `hostelname` blocks:
  - **Hall A (Alpha Block)** — Male (`Prefix: A`)
  - **Hall B (Beta Block)** — Female (`Prefix: B`)
  - **Unity Hall (Block U)** — Male (`Prefix: U`)
  - **Queen Moremi Hall** — Female (`Prefix: Q`)
- Strict gender validation: male students cannot select female halls and vice versa.
- Room blocks formatted as `<Prefix>-<RoomNumber>` (e.g. `A-101`, `B-201`, `U-101`).
- Individual bed space selection (`Bed 1`, `Bed 2`, etc.).
- **Crucial Rule Enforced:** Selecting a bed slot marks it as `Reserved (Pending Review)`, leaving `Allocated = False` and `isOccupied = false`.
- Space is **strictly unallocated** until verified by the Hall Porter under `frmHostelMgt`.

### 2.3 Hostel Management & Allocation Module (`frmHostelMgt`)
- **Real-time Selection Review Queue:** View all student selections.
- **Transactional Allocation (`cmdAlloc_Click`):**
  - Duplicate check (`StudentInfo.Allocated = False`).
  - Strict gender matching (`StudentInfo.Sex` vs `Hostels.Sex`).
  - Bed space capacity check (`Allocated < Capacity`).
  - Upon approval:
    - Inserts mapping record into `RoomAllocation` (`RoomId`, `MatricNo`).
    - Updates `StudentInfo.Allocated = True`.
    - Increments room occupancy (`Hostels.Allocated = Hostels.Allocated + 1`).
    - Increments parent hostel `CapacityUsed`.
    - Generates student's official **Clearance Pass**.
- **Room Occupants Inspection (`frmRoomDetails`):** Click any room in the inventory to view all assigned students, their matric numbers, and bed breakdown.

### 2.4 Student Registration & Records Module (`frmStudRec` & `frmStudReg`)
- Full student profiles matching Section 3.2:
  `MatricNumber`, `LastName`, `FirstName`, `Sex`, `School`, `Department`, `CourseofStudy`, `tblLevel`, `CGPA`, `SpecialCase`, `NameofSponsor`, `SponsorAddress`, `NextofKin`, `KinAddress`, `Allocated`.
- Search by surname or matriculation number, live department filtering, and student registration form.

### 2.5 Hostel & Room Setup Module (`frmAddHostel` & `frmAddRoom`)
- Register new hostel blocks into `hostelname` (auto-prefix from first letter `Left$(txtHostelName, 1)`).
- Add new rooms linked to parent hostel in `Hostels` (auto creates `RoomID` as `<Prefix>-<RoomNumber>`).

### 2.6 Administrative Reporting Module (`DataReport`)
- Unallocated Students Report (`Allocated = False`).
- Hostel Capacity & Occupancy Breakdown.
- Printable Official University Accommodation Clearance Slip / Room Pass with verification barcode and key code.
# Otukoya-pelumi-project
# Otukoya-pelumi-project
# Otukoya-pelumi-project
# Otukoya-pelumi-project
# Otukoya-pelumi-project
# Otukoya-pelumi-project
# Otukoya-pelumi-project
