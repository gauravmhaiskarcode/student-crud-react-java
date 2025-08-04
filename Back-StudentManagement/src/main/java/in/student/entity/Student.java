package in.student.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="students")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long sId;
	
	@Column(name="S_NAME")
	private String sName;
	
	@Column(name="S_LASTNAME")
	private String sLastName;
	
	@Column(name="S_ADDR")
	private String sAddr;
	
	@Column(name="S_CLASS")
	private String sClass;
	
	@Column(name="S_NUM")
	private Long sNum;

}
