import React, { Component, useState, useEffect } from 'react'
import {View, Text, Button} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from '../database/firebase'
import {ListItem, Avatar} from 'react-native-elements'

const UsersList = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users = []
            querySnapshot.docs.forEach(doc => {
                const {name, email, phone} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            })
            setUsers(users)
        })
    })
    return (
        <ScrollView>
            <Button title="Create User" onPress={() => {props.navigation.navigate('CreateUserScreen')}}/>
            {
                users.map(user => {
                    return (
                        <ListItem 
                            key={user.id}
                            bottomDivider
                            onPress={
                                () => {
                                    props.navigation.navigate('UserDetailScreen', {
                                        userId: user.id
                                    })
                                }
                            }
                        >
                            <ListItem.Chevron/>
                            <Avatar source={{uri: 'https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg'}} rounded/>
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}

export default UsersList
