package searchill_code;

import java.util.*;
import java.awt.Desktop;
import java.net.*;
import java.io.IOException;

public class Enfermedad {
	
	private String nombre;
	
	private String url;
	
	private Vector<Sintoma>sintomas;
	
 	private int popularidad;
 	
 	private int prioridad;
 	
 	public Vector<Date>fechas;//Estaciones donde es mas propicia esta estación
 	
 	public Enfermedad(String nombre, Vector<Sintoma>sintomas) {
 		this.nombre=nombre;
 		this.sintomas=sintomas;
 		this.popularidad=0;
 		this.prioridad=0;
 	}
 	
 	public Enfermedad(String nombre, Vector<Sintoma>sintomas, String ur) {
 		this.nombre=nombre;
 		this.sintomas=sintomas;
 		this.url=ur;
 		this.popularidad=0;
 		this.prioridad=0;
 	}
 	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getURLs() {
		return url;
	}

	public void setURLs(String URLs) {
		this.url = URLs;
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
	public String getUrl() {
		return url;
	}
	
	public void setUrl(String url) {
		this.url = url;
	}

	public Vector<Date> getFechas() {
		return fechas;
	}

	public void setFechas(Vector<Date> fechas) {
		this.fechas = fechas;
	}

	public Enfermedad(String nombre) {
 		this.nombre=nombre;
 		this.popularidad=0;
 		this.prioridad=0;
 	}
	
	public void addDate(Date f) {
		fechas.add(f);
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
 	public void openURL() {
 		if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
 		    try{
 		    	Desktop.getDesktop().browse(new URI(url));
 		    }catch(IOException | URISyntaxException e){
 		    	e.printStackTrace();
 		    }
 		}
 	}
	
}