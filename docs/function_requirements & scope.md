# Functional Requirements & Scope (Working Draft)
  
> Status: This document is a working draft created for alignment and discussion.
> The scope, structure, and requirements described here are not final and may change as the project evolves.
  
## 1. Purpose
This document defines the current functional scope of the project, including:
- Identified backend pages/sections
- UX-defined homepage sections

The goal is to align UX, frontend, and backend before detailed API design and implementation.

---

## 2. In Scope
- Public-facing content pages
- Content listing and detail views
- Community and volunteer information
- Contact and inquiry submission
- Basic media display (images)

---

## 3. Out of Scope (for now)
- User authentication or user accounts
- Admin dashboard or role-based permissions
- Online payment processing (donations handled externally)
- Advanced analytics or tracking
- Multilingual support (TBD)

---

## 4. Identified backend pages/sections
The following pages have been identified by the backend lead as current candidates for backend domains and are still subject to discussion and refinement: 

- News & Events
- Activities
- Community Support
- Reviews / Testimonials
- Contacts (Board of Directors, Executives, etc.)
- Contact Form
- Dogwood Society Activity Group Leaders + Contact Info
- Gallery (Possible / TBD)

---

## 5. Homepage Sections (UX-defined)
The homepage has been defined by the UX lead: 

Homepage sections include:
- Activities
- Community Support
- Facilities & Amenities
- Get Involved
- Get Support
- Volunteer
- Donate

---

## 6. Mapping: Homepage Sections → Backend Domains

| Homepage Section        | Backend Support |
|-------------------------|-----------------|
| Activities              | Activities |
| Community Support       | Community Support |
| Facilities & Amenities  | Static content or Contacts (facility-related info), TBD |
| Get Involved            | Volunteer |
| Get Support             | Community Support + Contact Form |
| Volunteer               | Volunteer |
| Donate                  | External link + Contact Form |

---

## 7. Page-level Functional Requirements

### 7.1 News & Events
- Display a list of news and events
- Allow users to view details of a single item
- Support basic filtering (news vs events)
- Content is read-only for public users

---

### 7.2 Activities
- Display a list of activities
- Allow users to view activity details
- Activities may include schedule, location, and description
- Content is read-only for public users

---

### 7.3 Community Support
- Display available community support services
- Provide clear guidance on how users can access support
- May include eligibility or contact information

---

### 7.4 Reviews / Testimonials
- Display a list of approved testimonials
- Testimonials are read-only for public users
- Submission or moderation flow is TBD

---

### 7.5 Contacts
(Including board members, executives, and key contacts)

- Display contact information grouped by role or team
- Support basic ordering and grouping
- Content is read-only for public users

---

### 7.6 Contact Form
- Allow users to submit inquiries
- Required fields include name, contact information, and message
- Submissions are stored for follow-up
- Notifications or integrations are TBD

---

### 7.7 Activity Group Leaders + Contact Info
- Display a list of Dogwood Society activity groups
- Show group leader names and contact information
- Content is read-only for public users

---

### 7.8 Gallery (TBD)
- Display a collection of images
- Images may include captions or tags
- Image upload and storage approach is TBD

---

## 8. Open Questions / Decisions Needed
- Get Involved vs. Volunteer: Are these two homepage sections clearly differentiated (overview vs. specific action), or potentially overlapping?

## 9. Next Step
- Review and refine this document with UX, frontend, and backend
- Align on API contract based on the agreed scope
- Define data models and endpoints
