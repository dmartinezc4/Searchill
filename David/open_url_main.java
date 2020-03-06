package searchill_code;

import java.util.Vector;

public class open_url_main {
	
	public static void main(String[]args) {
		Vector<Sintoma>sintomasgripe=new Vector<Sintoma>();
	
	Enfermedad gripe=new Enfermedad("Gripe",sintomasgripe,"https://www.who.int/topics/influenza/es/");
	
	gripe.openURL();
	
	
}
	
	

}
