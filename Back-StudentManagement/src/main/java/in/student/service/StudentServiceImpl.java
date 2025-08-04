package in.student.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import in.softronix.exception.ResourceNotFoundException;
import in.student.dto.StudentDto;
import in.student.entity.Student;
import in.student.mapper.StudentMapper;
import in.student.repository.StudentRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {

	private StudentRepository studentRepository;

	@Override
	public StudentDto createStudent(StudentDto studentDto) {

		Student student = StudentMapper.mapToStudent(studentDto);
		Student saveStudent = studentRepository.save(student);

		return StudentMapper.mapToStudentDto(saveStudent);
	}

	@Override
	public StudentDto getStudentById(Long studentId) {

		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student is not exist with given id : " + studentId));

		return StudentMapper.mapToStudentDto(student);
	}

	@Override
	public List<StudentDto> getAllStudent() {

		List<Student> students = studentRepository.findAll();
		
		return students.stream().map((employee)->StudentMapper.mapToStudentDto(employee)).collect(Collectors.toList());
	}

	@Override
	public StudentDto updateStudent(Long studentId, StudentDto updateStudent) {

		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student is not exist with given id : " + studentId));
		
		student.setSName(updateStudent.getSName());
		student.setSLastName(updateStudent.getSLastName());
		student.setSAddr(updateStudent.getSAddr());
		student.setSClass(updateStudent.getSClass());
		student.setSNum(updateStudent.getSNum());
		
		Student updatedStudentObj = studentRepository.save(student);
		
		return StudentMapper.mapToStudentDto(updatedStudentObj);
	}

	@Override
	public void deleteCustomer(Long studentId) {
		
		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student is not exist with given id : " + studentId));
		
		studentRepository.deleteById(studentId);

	}

}
