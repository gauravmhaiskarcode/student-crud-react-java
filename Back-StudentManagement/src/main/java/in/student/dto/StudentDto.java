package in.student.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
	
	private Long sId;
	
	@JsonProperty("sname")
	private String sName;
	
	@JsonProperty("slastname")
	private String sLastName;
	
	@JsonProperty("saddr")
	private String sAddr;
	
	@JsonProperty("sclass")
	private String sClass;
	
	@JsonProperty("snum")
	private Long sNum;

}
