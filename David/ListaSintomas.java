package searchill_code;

import java.util.Vector;

public class ListaSintomas {
	private Vector<Sintoma>sintomas;
	public ListaSintomas() {
		this.sintomas=new Vector<Sintoma>();
	}
	public void addSintomas(Sintoma s) {
		sintomas.add(s);
	}
}
