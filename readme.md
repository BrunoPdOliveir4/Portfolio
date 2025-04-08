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
```mermaid
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

## About the Project

I took some time to reflect on the traditional job-hunting process—and instead of sending out tons of resumes to countless companies, I decided to flip the script.

This project is my way of saying:
“Here’s who I am, here’s what I can do—now tell me what opportunities you have.”

So, if you’re an employer or recruiter and you see potential here, feel free to send me your job opportunity. Let’s connect and build something great together.

### How to Send Me Your Opportunity

If you're interested in working together, feel free to fill out this form:  
-> [https://portfolio-j4h8.onrender.com](https://portfolio-j4h8.onrender.com)  
It will automatically send me an email with your information.

The format of the info should look like this:

```json
{
  "name": "your_name",
  "company": "your_company",
  "jobPosition": "job title",
  "hours": 44, // must be an integer
  "income": 1400.23, // can be a float
  "contact": "email or phone"
}
```

> This is still a work in progress — thanks for your patience!

---


> In progress