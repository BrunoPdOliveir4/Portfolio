# Portfolio

## What is a Portfolio?

A portfolio is a collection of work, projects, or accomplishments that showcases your skills, experience, and creativity.

> I can't publicly share the projects I've worked on due to confidentiality, so I'm highlighting my skills and thought process instead.

---

## Documentation Skills

I have experience with documentation tools such as **Mermaid** and **Astah**, and I'm currently learning **PlantUML** to expand my diagramming capabilities.

### Entity-Relationship Diagram

For this project, I created an ER diagram to illustrate the relationship between a candidate (me) and potential employers:

```mermaid
erDiagram
    CandidateSkills }|..|{ JobOpportunity : requires
    CandidateSkills ||--o{ Candidate : possesses
    CandidateSkills ||--o{ CandidateInterest : relates_to
    JobOpportunity ||--o{ Employer : provided_by
    CandidateInterest ||--|{ Employer : interested_in
    Employer ||--|{ Company : part_of
```
### Employment Process Mindmap

To better understand and represent the employment journey, I created a mindmap using Mermaid:
```
mindmap
  root((Employment Process))
    Preparation
      Resume
      Portfolio
      Certifications
    Application
      Job Boards
      Company Websites
      Networking
    Selection
      Screening
      Interviews
      Assessments
    Offer
      Negotiation
      Acceptance
    Onboarding
      Documents
      Training
      Integration
```


