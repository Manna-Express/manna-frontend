import { styled } from "@/stitches"


export const TransactionsContainer = styled('div',{

    maxHeight: '500px',
})
export const Transaction = styled('div',{
    borderBottom: '1px solid #4b556349',
    margin: '0px auto',
    '@media screen and (min-width: 400px)':{ 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '500px',
    }
})
export const TransactionName = styled('div',{
        color: '#4b5563',
        'p':{
            color: 'white',
            display: 'inline-block',
            padding: '.3rem',
            borderRadius: '5px',
            margin: '.2rem 0',
        }

})

export const TransactionInfo = styled('div',{

    'strong':{
        color: '#4b5563',
    }
})

