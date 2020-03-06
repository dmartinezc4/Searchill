package searchill_code;

import java.util.Vector;

public class busquedamain {
	
	public static void main(String []args) {
		
		Vector<Sintoma>sintomasgripe=new Vector<Sintoma>();
		Vector<Sintoma>sintootro=new Vector<Sintoma>();
		
		Sintoma tosg=new Sintoma("Tos");
		tosg.setPuntos(2);
		Sintoma tos=new Sintoma("Tos");
		tos.setPuntos(1);
		sintomasgripe.add(tos);
		Sintoma highfiebreg=new Sintoma("Fiebre alta");
		highfiebreg.setPuntos(3);
		Sintoma highfiebre=new Sintoma("Fiebre alta");
		highfiebre.setPuntos(1);
		
		sintomasgripe.add(highfiebreg);sintomasgripe.add(tosg);
		sintootro.add(highfiebre);sintootro.add(tos);
		
		Enfermedad gripe=new Enfermedad("Gripe",sintomasgripe,"https://www.who.int/topics/influenza/es/");
		Enfermedad otro=new Enfermedad("Meh",sintootro,"https://www.google.es/");
		
		ListaEnfermedades lista=new ListaEnfermedades();
		
		lista.addEnfermedades(gripe);
		lista.addEnfermedades(otro);
	}
}
