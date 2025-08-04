package in.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import in.student.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
