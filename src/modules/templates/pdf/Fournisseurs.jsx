import { Document, Page, View, Text, Image,} from "@react-pdf/renderer";
import {Table, TableHeader, TableCell, TableBody, DataTableCell} from '@david.kucsai/react-pdf-table';

const data = [
    {
        article: "Cocacola",
        quantite: 5,
        prixUnitaire: 1000,
        total: 5000,
        client: "rbatoulime@gmail.com"
    },
    {
        article: "Fanta",
        quantite: 3,
        prixUnitaire: 1200,
        total: 3600,
        client: "akrabalgodwina@gmail.com"
    },
    {
        article: "Yaourt",
        quantite: 2,
        prixUnitaire: 500,
        total: 1000,
        client: "+22892475777"
    },
    {
        article: "Yaourt",
        quantite: 4,
        prixUnitaire: 500,
        total: 2000,
        client: "+22890124403"
    }
]

export default function DocFournisseur(props) {
    return (
        <Document>
            <Page size='A4' style={{padding: 20, fontSize: 12, backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 30}}>
                    <Text> {props.name} </Text>
                    <Text>Août 2022</Text>
                </View>
                <View style={{marginBottom: 10, flexDirection: 'column', alignItems: 'center'}}>
                    <View style={{width: 50, height: 50}}>
                        <Image style={{width: '100%', heigh: '100%'}} src='/champion.png' />
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, marginVertical: 20}}>Liste des commandes</Text>
                    <Text style={{fontSize: 12,}}>Commandes clients</Text>
                </View>
    
                <Table data={data}>
                    <TableHeader>
                        <TableCell style={{paddingVertical: 5, paddingLeft: 5, backgroundColor: '#F06B6B', color: 'white', fontSize: '14', fontWeight: 'bold'}}>Client</TableCell>
                        <TableCell style={{paddingVertical: 5, paddingLeft: 5, backgroundColor: '#F06B6B', color: 'white', fontSize: '14', fontWeight: 'bold'}}>Article</TableCell>
                        <TableCell style={{paddingVertical: 5, paddingLeft: 5, backgroundColor: '#F06B6B', color: 'white', fontSize: '14', fontWeight: 'bold'}}>Quantité</TableCell>
                        <TableCell style={{paddingVertical: 5, paddingLeft: 5, backgroundColor: '#F06B6B', color: 'white', fontSize: '14', fontWeight: 'bold'}}>Prix Unitaire</TableCell>
                        <TableCell style={{paddingVertical: 5, paddingLeft: 5, backgroundColor: '#F06B6B', color: 'white', fontSize: '14', fontWeight: 'bold'}}>Total</TableCell>
                    </TableHeader>
                    <TableBody>
                        <DataTableCell style={{paddingVertical: 5, paddingLeft: 5}} getContent={(r) => r.client}/>
                        <DataTableCell style={{paddingVertical: 5, paddingLeft: 5}} getContent={(r) => r.article}/>
                        <DataTableCell style={{paddingVertical: 5, paddingLeft: 5}} getContent={(r) => r.quantite}/>
                        <DataTableCell style={{paddingVertical: 5, paddingLeft: 5}} getContent={(r) => r.prixUnitaire}/>
                        <DataTableCell style={{paddingVertical: 5, paddingLeft: 5}} getContent={(r) => r.total}/>
                    </TableBody>
                </Table>
                <View style={{alignSelf: 'flex-end', marginVertical: 20}}>
                    <Text>Nombre: {data.length}</Text>
                </View>
            </Page>
        </Document>
    )
}