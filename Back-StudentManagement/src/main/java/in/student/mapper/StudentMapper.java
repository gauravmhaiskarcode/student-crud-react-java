package in.student.mapper;

import in.student.dto.StudentDto;
import in.student.entity.Student;

public class StudentMapper {
	
	public static StudentDto mapToStudentDto(Student student) {
		return new StudentDto(
				student.getSId(),
				student.getSName(),
				student.getSLastName(),
				student.getSAddr(),
				student.getSClass()	,
				student.getSNum()
				);
	}

	public static Student mapToStudent(StudentDto studentdto) {
		return new Student(
				studentdto.getSId(),
				studentdto.getSName(),
				studentdto.getSLastName(),
				studentdto.getSAddr(),
				studentdto.getSClass(),
				studentdto.getSNum()
				);
	}
}
