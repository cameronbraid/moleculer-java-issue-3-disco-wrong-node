import java.util.Scanner;

import io.datatree.Tree;
import services.moleculer.ServiceBroker;
import services.moleculer.transporter.TcpTransporter;

public class Client {

	public static void main(String[] args) throws Exception {
		TcpTransporter transporter = new TcpTransporter();

		transporter.setPort(4000);

		transporter.setUrls("127.0.0.1:4001/discovery");
//		transporter.setUrls("127.0.0.1:4002/service");
		transporter.setUdpBroadcast(false);
		transporter.setUseHostname(false);
		transporter.setPreferHostname(false);
		ServiceBroker broker = ServiceBroker.builder()
			.nodeID("java")
			.transporter(transporter)
			.build();
		
		broker.start();

        try (Scanner input = new Scanner(System.in)) {
        	
            while (true) {
                String line = input.nextLine();
            	if (line.startsWith("a")) {
                    
            		Tree actions = broker.call("$node.actions").waitFor();
            		for (int i =0; i < actions.size(); i++) {
                        Tree action = actions.get(i);
                        String name = action.get("name", "<unknown>");
            			if (name.equals("math.add")) {
            				System.out.println(actions.get(i));
                        }
                        else {
                            System.out.println(name);
                        }
            				
            		}
            	}
            	else if (line.startsWith("c")) {
            		Tree params= new Tree();
            		params.put("a", 1);
            		params.put("b", 2);
            		try {
            			System.out.println(broker.call("math.add", params).waitFor());
            		}
            		catch (Exception e) {
            			e.printStackTrace();
            		}
            	}
    		}
        }
	}
}
