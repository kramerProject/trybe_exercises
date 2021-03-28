db.transactions.aggregate(
    [{ $match : { from : "Dave America" } }]
  );
  db.transactions.aggregate(
    [{ $match : {
        $or: [
            {$and: [{value: {$gt: 700, $lt: 6000}}]},
            {from: "Lisa Simpson"}
        ]
    }}]
  );