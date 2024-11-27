import Principal from "../processos/principal";
import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem"
import { TipoDocumento } from "../enumeracoes/TipoDocumento"
import Cliente from "../modelos/cliente"
import Documento from "../modelos/documento"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis :)`);

let processo: Processo
let execucao: Boolean = true

let armazem = Armazem.InstanciaUnica
let clienteTeste = new Cliente("Jonas Miguel", "jonas", new Date(2003, 12, 29))

let telefone = new Telefone("12", "40028922")
clienteTeste.setTelefones([telefone])

let documento = new Documento("456", TipoDocumento.Passaporte, new Date())
clienteTeste.setDocumentos([documento])

let endereco = new Endereco("algum0","algum2","algum3","algum4","algum5","13142351")
clienteTeste.setEndereco(endereco)

let dependenteTeste = new Cliente("Dependente Teste", "Dependente", new Date())
dependenteTeste.setTitular(clienteTeste)
clienteTeste.addDependente(dependenteTeste)

telefone = new Telefone("12", "4002-8922")
dependenteTeste.setTelefones([telefone])

documento = new Documento("123", TipoDocumento.Passaporte, new Date())
dependenteTeste.setDocumentos([documento])

endereco = new Endereco("algum01","algum02","algum03","algum04","algum05","13142352")
dependenteTeste.setEndereco(endereco)

armazem.Clientes.push(clienteTeste)
armazem.Clientes.push(dependenteTeste)
while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}