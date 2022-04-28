import topo from "../../assets/topo.png"
import logoVendedor from '../../assets/logo.png';
import antena2g from '../../assets/Itens/antena2g3g.png';
import antenaWifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import node from '../../assets/Itens/nodeMcu.png';
import caboMicroUsb from '../../assets/Itens/caboMicroUsb.png';
import jumperMacho from '../../assets/Itens/jumperMacho.png';
import resistores from '../../assets/Itens/resistores.png';
import sensorLuminoso from '../../assets/Itens/sensorLuminoso.png';
import sensorTemperatura from '../../assets/Itens/sensorTemperatura.png';

const carrinho = {
    topo:{
        titulo: "Carrinho",
        imagem: topo,
    },
    detalhes: {
        titulo: "Detalhes do Carrinho",
        tituloProduto: "Kit IoT",
        descricao: "Kit IoT que revoluciona a vida dos estudantes.",
        nomeVendedor: "Nuvem's Shopping",
        preco: "R$ 99,99",
        logoVendedor: logoVendedor
    },
    items:{
        list: [
            {
               nome: "Jumper Macho",
               imagem: jumperMacho,
            }, 
        ]
    },
    itens:{
        titulo: "Itens do Carrinho",
        lista: [
            {
                nome: "Antena 2G/3G",
                imagem: antena2g,
            },
            {
                nome: "Antena Wifi",
                imagem: antenaWifi,
            },
            {
                nome: "Modem",
                imagem: modem,
            },
            {
                nome: "Node MCU",
                imagem: node,
            },          
            {
                nome: "Cabo Micro Usb",
                imagem: caboMicroUsb,
            },
            {
                nome: "Resistores",
                imagem: resistores,
            },
            {
                nome: "Sensor Luminoso",
                imagem: sensorLuminoso,
            },
            {
                nome: "Sensor Temperatura",
                imagem: sensorTemperatura,
            },
            {
                nome: "Jumper Macho",
                imagem: jumperMacho,
            },  
        ]
    }
}

export default carrinho;