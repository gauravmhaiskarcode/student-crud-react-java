package in.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties.Http;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.student.dto.StudentDto;
import in.student.service.StudentService;
import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/students")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@PostMapping
	public ResponseEntity<StudentDto> createStudent(@RequestBody StudentDto studentDto){
		
		StudentDto savedStudent = studentService.createStudent(studentDto);
		return new ResponseEntity<>(savedStudent,HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<StudentDto> getStudentById(@PathVariable("id") Long studentId){
		StudentDto studentById = studentService.getStudentById(studentId);
		return ResponseEntity.ok(studentById);
	}
	
	@GetMapping
	public ResponseEntity<List<StudentDto>> getAllStudent(){
		List<StudentDto> allStudent = studentService.getAllStudent();
		return ResponseEntity.ok(allStudent);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<StudentDto> updateStudent(@PathVariable("id")Long studentId,@RequestBody StudentDto updateStudent){
		StudentDto studentDto = studentService.updateStudent(studentId, updateStudent);
		return ResponseEntity.ok(studentDto);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteStudent(@PathVariable("id") Long studentId){
		studentService.deleteCustomer(studentId);
		return ResponseEntity.ok("Student Delete Successfully");
	}

}
