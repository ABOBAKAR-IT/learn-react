import React from 'react';
import { Page, Document, StyleSheet, Text, View, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20
  },
  section: {
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    fontSize: 12,
    marginBottom: 5
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  }
});

// Create the SalesBill component
const SalesBill = ({ billData }) => (
  <div>
    <h1>Sales Bill</h1>
    <PDFDownloadLink document={<SalesBillDocument billData={billData} />} fileName="sales_bill.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download Sales Bill'
      }
    </PDFDownloadLink>
  </div>
);

// Create the SalesBillDocument component
const SalesBillDocument = ({ billData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Sales Bill</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Customer Details:</Text>
        <Text style={styles.text}>Name: {billData.customerName}</Text>
        <Text style={styles.text}>Email: {billData.customerEmail}</Text>
        <Text style={styles.text}>Phone: {billData.customerPhone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Products:</Text>
        {billData.products.map((product, index) => (
          <View key={index}>
            <Text style={styles.text}>Product: {product.name}</Text>
            <Text style={styles.text}>Price: {product.price}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.total}>Total: {billData.total}</Text>
      </View>
    </Page>
  </Document>
);

export default SalesBill;
