package com.example.demo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.job;
import com.example.demo.repository.JobRepository;




@RestController
@RequestMapping("/api/jobs")

@CrossOrigin(origins = "http://localhost:5173")
public class JobController {
    private final JobRepository jobRepository;

    public JobController(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @GetMapping 
    public List<job> getAllJobs(){
        return jobRepository.findAll();
    }

    @PostMapping
    public job createJob( @RequestBody job newJob) {
       return jobRepository.save(newJob);
    }

    @PutMapping("/{id}")
   public job updateJob(@PathVariable Long id, @RequestBody job jobActualizado) {
        return jobRepository.findById(id)
                .map(job -> {
                    job.setTitle(jobActualizado.getTitle());
                    job.setCompany(jobActualizado.getCompany());
                    job.setDescription(jobActualizado.getDescription());
                    job.setSalary(jobActualizado.getSalary());
                    return jobRepository.save(job);
                })
                .orElseGet(() -> {
                    jobActualizado.setId(id);
                    return jobRepository.save(jobActualizado);
                });
    }

    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable Long id){
        jobRepository.deleteById(id);
    }
    
}
