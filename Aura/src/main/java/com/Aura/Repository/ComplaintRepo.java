package com.Aura.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Aura.Model.Complaint;

@Repository
public interface ComplaintRepo extends JpaRepository<Complaint,Long>{ 
      //I will add  quries related to COmplaint Repository Later!!!!    
}
