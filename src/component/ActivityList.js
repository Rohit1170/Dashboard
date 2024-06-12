import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const activities = [
  { text: "Gurpreet Singh (Dispatch team) has created Load No. I-AAA-1325", timestamp: "19 Mar 2024" },
  { text: "Aman (Driver) Picked Up goods at Location_Name for Load No. I-AAA-1325", timestamp: "19 Mar 2024" },
  // Add more activities here...
];

const ActivityList = () => {
  return (
    <List>
      {activities.map((activity, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText primary={activity.text} secondary={activity.timestamp} />
          </ListItem>
          {index < activities.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ActivityList;
