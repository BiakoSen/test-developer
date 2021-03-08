import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import {VictoryChart, VictoryGroup, VictoryBar} from 'victory-native'

class buscador extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          Usuarios: [],
          Url: 'https://api.github.com/search/users?q=',
          Usuario: null,
          UrlUsuario: [],
          NumSeguidores: [],
          FollowersRrl: []
        };
    
        this.gitHubQueryAPI = this.gitHubQueryAPI.bind(this);
        this.vistaUsuario = this.vistaUsuario.bind(this);
        this.barras = this.barras.bind(this);
        this.num = this.num.bind(this);
    
      }
    
      gitHubQueryAPI(){
    
        if(this.state.Usuario != 'react' && this.state.Usuario != null && this.state.Usuario.length > 3){
    
         fetch(this.state.Url + this.state.Usuario)
            .then(res => res.json())
            .then(res => {
              this.setState({
              Usuarios: res.items.slice(0,10),
           })
            this.state.UrlUsuario = this.state.Usuarios.map(i => i.followers_url)
         });
         this.barras();
       }
      }
      num(temp){
        this.setState((state) => {
            return { NumSeguidores: state.count + 1}
        });
      }

      barras(){
        const arr = [] = this.state.UrlUsuario

        const temp = [];

        for(let i=0; i < arr.length; i++){
            fetch(arr[i])
            .then(res => res.json())
            .then(res =>{ temp = res})
            }
           
        }

      vistaUsuario(login){
          this.props.navigation.navigate('Profile', {name: login})
        }

    render(){
        const { Usuario } = this.state;


            return(
                <View style={styles.container}>
    
                <View style={styles.subcontainer}>
                  <TextInput
                  style={styles.txtInput}
                  onChangeText={val => this.setState({ Usuario: val })}
                  value={Usuario}
                  />
                  <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {this.gitHubQueryAPI ()}}>
                    <Text style={styles.txtBoton}>Buscar</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.subcontainer1}>
                   <FlatList
                       data={this.state.Usuarios}
                       renderItem={
                      ({item}) => <View>
                        <TouchableOpacity 
                            style={styles.result}
                            onPress={ () => {this.vistaUsuario(item.login)}}
                            >
                            <Text style={styles.txtResult}> {item.login} </Text>
                            <Text style={styles.txtResult}> {item.id} </Text>
                        </TouchableOpacity>
                        </View>
                }
                />
                </View>

                <VictoryChart>
                    <VictoryGroup offset={40}>
                        <VictoryBar
                            data={data.planned}
                            style={{
                                data:{
                                    fill: 'yellow'
                                }
                            }}
                        />
                    </VictoryGroup>
                </VictoryChart>

            </View>);
    }
}

const data = {
    planned: [1,2,3]
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#2c3e50',
    },
    subcontainer:{
      height:50,
      width: '100%',
      backgroundColor: '#2c3e50',
      flexDirection: 'row',
      marginVertical: 15,
    },
    subcontainer1:{
        height: 200,
        width: '100%',
        backgroundColor: '#2c3e50',
        flexDirection: 'row',
        marginVertical: 15,
      },
    txtInput:{
      flex: 1,
      height: '100%',
      width: '100%',
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 25,
    },
    result:{
      flex: 1,
      backgroundColor: 'gray',
      marginTop: 5,
      flexDirection: 'row',
      borderRadius: 25,
    },
    txtResult:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    },
    txtBoton:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black'
    },
    btn:{
      height: '100%',
      width: 125,
      borderRadius: 25,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default buscador

