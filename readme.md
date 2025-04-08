```Mermaid
erDiagram
    CandidateSkills }|..|{ JobOpportunity : requires
    CandidateSkills ||--o{ Candidate : possesses
    CandidateSkills ||--o{ CandidateInterest : relates_to
    JobOpportunity ||--o{ Employer : provided_by
    CandidateInterest ||--|{ Employer : interested_in
    Employer ||--|{ Company : part_of
```