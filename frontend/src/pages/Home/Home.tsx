import "./Home.css"
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import  ObjectListForm  from "@/pages/Home/ObjectListForm"; 


export const Home = () => {
    return (
        <div>
            <Navegacao />

            <h1 id="titulo">Teste de Liderança Situacional</h1>

            <div id="menu">
                <div id="container">
                    

                    <div id="menu-ps" className="mt-24">
                        <ObjectListForm/>
                    </div>
                    
                </div>
                
            </div>
        </div>

       
        



        
    );
}