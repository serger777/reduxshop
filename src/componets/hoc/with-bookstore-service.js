import React from 'react';
import {BookStoreServiceConsumer} from "../bookstore-service";

const withBookstoreService = () => (Wrapped) => {
    return (props)=>{
        return(
            <BookStoreServiceConsumer>
                {
                    (bookstoreService)=>{
                      return  (<Wrapped {...props}
                        bookstoreService={bookstoreService}
                        />)
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}
export default withBookstoreService;
