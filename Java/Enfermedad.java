package searchill_code;

import java.util.Vector;

public class Enfermedad {
	
	private String nombre;
	
	private Vector<String>URLs;
	
	private Vector<Sintoma>sintomas;
	
 	private int popularidad;
 	
 	private int prioridad;
 	
 	public Enfermedad(String nombre) {
 		this.nombre=nombre;
 		this.popularidad=0;
 		this.prioridad=0;
 	}

 	public Enfermedad(String nombre, Vector<Sintoma>sintomas) {
 		this.nombre=nombre;
 		this.sintomas=sintomas;
 		this.popularidad=0;
 		this.prioridad=0;
 	}
 	
 	public Enfermedad(String nombre, Vector<Sintoma>sintomas, Vector<String>URLs) {
 		this.nombre=nombre;
 		this.sintomas=sintomas;
 		this.URLs=URLs;
 		this.popularidad=0;
 		this.prioridad=0;
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
	
}
