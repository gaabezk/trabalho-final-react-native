import React from "react";
import { Text, View } from "react-native";
import api from "../../services/api";

const apiKey = 'api_key=cd70ccaa5142525fa97293402321f923';
const language = 'language=pt-BR';

export const Catalogo = () => {

    function Click(){
        //seta no contexto a posicao do filme
    }
    
    function filmes(){
        const init = async () => {
            const response = await api.get('');
        }
    }

    return(
        <View>
            <Text>Boa tarde</Text>
        </View>
    )
}