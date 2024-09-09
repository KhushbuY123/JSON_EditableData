import React, { useState } from "react";
import { results } from './data';
import { Grid, TextField, Button, Box, Typography, Paper } from "@mui/material";

const EditableTable = () => {
  const [data, setData] = useState(results);
  const [editIdx, setEditIdx] = useState(-1);

  const handleInputChange = (e, index, field, subField = null) => {
    const newData = [...data];
    
    if (subField) {
      newData[index][field][subField] = e.target.value; 
    } else {
      newData[index][field] = e.target.value;
    }
    
    setData(newData);
  };

  const downloadJSON = () => {
    const fileData = JSON.stringify(data, null, 2);
    const blob = new Blob([fileData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "edited_invoices.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Editable Invoices Table
      </Typography>

      {data.map((invoice, index) => (
        <Paper key={index} sx={{ marginBottom: 4, padding: 3 }}>
          <Typography variant="h6" sx={{mb:2}}>
            Invoice {invoice.InvoiceInformation.InvoiceNumber}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Invoice Number"
                fullWidth
                value={invoice.InvoiceInformation.InvoiceNumber}
                onChange={(e) =>
                  handleInputChange(e, index, "InvoiceInformation", "InvoiceNumber")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Invoice Date"
                fullWidth
                value={invoice.InvoiceInformation.InvoiceDate}
                onChange={(e) =>
                  handleInputChange(e, index, "InvoiceInformation", "InvoiceDate")
                }
                disabled={editIdx !== index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Supplier Name"
                fullWidth
                value={invoice.SupplierInformation.SupplierName}
                onChange={(e) =>
                  handleInputChange(e, index, "SupplierInformation", "SupplierName")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Address"
                fullWidth
                value={invoice.SupplierInformation.Address}
                onChange={(e) =>
                  handleInputChange(e, index, "SupplierInformation", "Address")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="GSTIN"
                fullWidth
                value={invoice.SupplierInformation.GSTIN}
                onChange={(e) =>
                  handleInputChange(e, index, "SupplierInformation", "GSTIN")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile"
                fullWidth
                value={invoice.SupplierInformation.Mobile}
                onChange={(e) =>
                  handleInputChange(e, index, "SupplierInformation", "Mobile")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="CustomerName"
                fullWidth
                value={invoice.CustomerInformation.CustomerName}
                onChange={(e) =>
                  handleInputChange(e, index, "CustomerInformation", "CustomerName")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="State"
                fullWidth
                value={invoice.CustomerInformation.State}
                onChange={(e) =>
                  handleInputChange(e, index, "CustomerInformation", "State")
                }
                disabled={editIdx !== index}
              />
            </Grid>

          </Grid>

          <Box mt={2}>
            {editIdx === index ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setEditIdx(-1)}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setEditIdx(index)}
              >
                Edit
              </Button>
            )}
          </Box>
        </Paper>
      ))}

      <Button variant="outlined" color="success" onClick={downloadJSON} sx={{ marginTop: 2 }}>
        Download Edited Data
      </Button>
    </Box>
  );
};

export default EditableTable;
