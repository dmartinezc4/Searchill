package searchill_code;

import java.util.Vector;

public class ListaEnfermedades {
	private Vector<Enfermedad>enfermedades;
	public ListaEnfermedades() {
		this.enfermedades=new Vector<Enfermedad>();
	}
	public Vector<Enfermedad> ordenadas(Vector<Sintoma>sintomas){
		return enfermedades;		
	}
	public void addEnfermedades(Enfermedad e) {
		enfermedades.add(e);
	}
	
	public void sort() {
		Vector<Integer>popularity=new Vector<Integer>();
		int points;
		for(int i=0;i<enfermedades.size();i++) {
			points=enfermedades.elementAt(i).getPrioridad();
			popularity.add(points);			
		}
		Vector<Enfermedad>nueva = new Vector<Enfermedad>();
		for(int i=0;nueva.size()!=enfermedades.size();i++) {
			
		}
	}
	public Enfermedad busquedaDirecta(String s) {
		for(int i=0;i<enfermedades.size();i++) {
			if(s.equalsIgnoreCase(enfermedades.elementAt(i).getNombre())) {
				return enfermedades.elementAt(i);
			}
		}
		return null;
	}
	
}