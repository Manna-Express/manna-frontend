import { styled } from "@/stitches"




export const TableStyle = styled('table',{
    fontFamily: 'Arial, Helvetica, sans-serif',
    borderCollapse: 'collapse',
    width: '100%',
   'td, th':{
    border:' 1px solid #ddd',
    padding: '8px',
  },
  'tr:nth-child(even)':{
    backgroundColor: '#f2f2f2',},
   'tr:hover':{backgroundColor: '#ddd',cursor: 'pointer',},
   'th':{
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'left',
    backgroundColor:' $green300',
    color: 'white',
  }
})
  
  