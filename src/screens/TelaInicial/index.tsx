import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from "./style"
import filmes from "../../assets/icons/filmes.png"
import tv from "../../assets/icons/tv.png"
import { CardTelaInicial } from '../../components/CardTelaInicial';


export const TelaInicial = ({ navigation }: any) => {

    return (
        <ScrollView style={styles.container}>

            <View style={{ flexDirection: 'row', marginBottom: 10, marginTop: 40, }}>
                <Image source={filmes} style={styles.image} />
                <Text style={styles.texto1}>Filmes</Text>

            </View>

            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial acao={() => navigation.navigate('Catalogo')} titulo='Filmes Populares' />
                <CardTelaInicial titulo='Filmes de Drama' />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial titulo='Filmes de Comédia' />
                <CardTelaInicial titulo='Filmes de Ação' />
            </View>


            <View style={{ flexDirection: 'row' }}>
                <Image source={tv} style={styles.image2} />
                <Text style={styles.texto2}>Streaming e TV</Text>

            </View>

            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial titulo='Séries Populares' />
                <CardTelaInicial titulo='Séries de Drama' />
            </View>
            <View style={{ flexDirection: 'row', }}>
                <CardTelaInicial titulo='Séries de Comédia' />
                <CardTelaInicial titulo='Séries de Ação' />
            </View>

            <StatusBar hidden />
        </ScrollView>
    );
}

