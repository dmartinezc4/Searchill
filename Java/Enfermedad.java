ppackage searchill_code;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Vector;

public class Enfermedad {
	
	private String nombre;
	
	private Vector<String>URLs;
	
	SimpleDateFormat strDateFormat=new SimpleDateFormat("dd-MM-yyyy"); // la fecha se deberá introducir en este formato para que se reconozca. ej: 23-12-2020, 01-02-2018
	
	Date probDateIni;
	
	Date probDateFin;
	
	private Vector<Sintoma>sintomas;
	
 	private int popularidad;
 	
 	private int prioridad;

 	public Enfermedad(String nombre, String date1, String date2, Vector<Sintoma>sintomas) throws ParseException {
 		this.nombre=nombre;
 		this.sintomas=sintomas;
 		this.popularidad=0;
 		this.prioridad=0;
 		this.probDateIni=strDateFormat.parse(date1);
 		this.probDateFin=strDateFormat.parse(date2);
 	}
 	
 	public Enfermedad(String nombre, String date1, String date2, Vector<Sintoma>sintomas, Vector<String>URLs) throws ParseException{
 		this.nombre=nombre;
 		this.sintomas=sintomas;
 		this.URLs=URLs;
 		this.popularidad=0;
 		this.prioridad=0;
 		this.probDateIni=strDateFormat.parse(date1);
 		this.probDateFin=strDateFormat.parse(date2);
 	}
 	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public Vector<String> getURLs() {
		return URLs;
	}

	public void setURLs(Vector<String> URLs) {
		this.URLs = URLs;
	}

	public Vector<Sintoma> getSintomas() {
		return sintomas;
	}

	public void setSintomas(Vector<Sintoma> sintomas) {
		this.sintomas = sintomas;
	}

	public int getPopularidad() {
		return popularidad;
	}

	public void setPopularidad(int popularidad) {
		this.popularidad = popularidad;
	}

	public int getPrioridad() {
		return prioridad;
	}

	public void setPrioridad(int prioridad) {
		this.prioridad = prioridad;
	}
	
	public Date getProbDateIni() {
		return probDateIni;
	}

	public void setProbDateIni(Date probDateIn) {
		this.probDateIni = probDateIn;
	}

	public Date getProbDateFin() {
		return probDateFin;
	}

	public void setProbDateFin(Date probDateEnd) {
		this.probDateFin = probDateEnd;
	}

	public SimpleDateFormat getStrDateFormat() {
		return strDateFormat;
	}
	
 	public int initializePoints() {
 		int i=0;
 		for (Sintoma s: sintomas) {
 			i=i+s.getPuntos();
 		}
 		return i;
 	}
 	
 	public void voteUp(Vector<Sintoma>buscados){
 		for (Sintoma s: sintomas) {
 			s.increasePuntos();
 		}
 	}
	public void buscarSintoma(Vector<Sintoma>sintomas) {
		for(Sintoma s: sintomas) {
			for(Sintoma t: this.sintomas) {
				if (s == t) prioridad ++;
			}
		}
	}
}
