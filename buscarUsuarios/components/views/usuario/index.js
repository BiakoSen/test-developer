import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


class Usuario extends Component{

    constructor(props){
        super(props);

        this.state = {
            Url: 'https://api.github.com/users/',
            Usuario: [],
        }

    }

    componentDidMount(){
        fetch(this.state.Url + this.props.route.params.name)
        .then(res => res.json())
        .then(res => {
          this.setState({
          Usuario: res
       })
     });
    }

    render(){
        return(<View style={styles.container}>

            <View >
                <Image
                    style={styles.igmContainer}
                    source={{uri: this.state.Usuario.avatar_url}}
                />
                <Text style={styles.txtTitulos}>Nick:</Text>
                <Text style={styles.txtUsuario}>{this.state.Usuario.login}</Text>
                <Text style={styles.txtTitulos}>Numero de repositorios:</Text>
                <Text style={styles.txtUsuario}>{this.state.Usuario.public_repos}</Text>
            </View>
    
        </View>);
    }
}
      

  
  
  
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2c3e50',
      },
    igmContainer:{
        height: 300,
        width: '100%',
        borderRadius: 15
    },
    txtUsuario:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF'
    },
    txtTitulos:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF'
    }
  });
  
  export default Usuario;