package in.student.service;

import java.util.List;

import in.student.dto.StudentDto;

public interface StudentService {
	
	StudentDto createStudent(StudentDto studentDto);
	
	StudentDto getStudentById(Long studentId);
	
	List<StudentDto> getAllStudent();
	
	StudentDto updateStudent(Long studentId,StudentDto updateStudent);
	
	void deleteCustomer(Long studentId);

}
