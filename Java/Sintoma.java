package searchill_code;

public class Sintoma {
	
	private String nombre;
	
	private int puntos;
	
	public Sintoma(String nombre) {
		this.nombre=nombre;
		this.puntos=0;
	}
	
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getPuntos() {
		return puntos;
	}

	public void setPuntos(int puntos) {
		this.puntos = puntos;
	}

	public void increasePuntos() {
		puntos=puntos++;
	}
	
}
