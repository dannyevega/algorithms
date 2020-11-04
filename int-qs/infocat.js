// We have a stream of metrics and tags (e.g. 'host:abc.com', 'role:db') that we receive from our
// customers and we want to build a page to summarize the tags they send.

// Given a stream of strings in the form '<metric>|<value>|<tags>' (e.g.
// 'system.load.1|1|host:a,role:web,availability-zone:us-east-1a') write a function that
// returns a tags count summary sorted by most commonly used tags. Tags with the same count
// should be sorted alphabetically.

// getStreamCount(stream);

// 6 availability-zone:us-east-1a
// 3 role:web
// 2 host:a
// 2 host:e
// 2 role:db
// 2 role:intake
// 1 availability-zone:us-east-1b
// 1 availability-zone:us-east-1e
// 1 db_role:master
// 1 db_role:replica
// 1 host:b
// 1 host:c
// 1 host:d
// 1 host:f
// 1 role:kafka

let stream = [
    'system.load.1|1|host:a,role:web,availability-zone:us-east-1a',
    'system.load.15|1|host:b,role:web,availability-zone:us-east-1b',
    'system.cpu.user|20|host:a,role:web,availability-zone:us-east-1a',
    'postgresql.locks|12|host:c,role:db,db_role:master,availability-zone:us-east-1e',
    'postgresql.db.count|2|host:d,role:db,db_role:replica,availability-zone:us-east-1a',
    'kafka.consumer.lag|20000|host:e,role:intake,availability-zone:us-east-1a',
    'kafka.consumer.offset|3000000|host:e,role:intake,availability-zone:us-east-1a',
    'kafka.broker.offset|25000|host:f,role:kafka,availability-zone:us-east-1a'
]

const getStreamCount = (list) => {
  let splitTags = [];
  for(let i = 0; i < list.length; i++){
    let current = list[i];
    let splitStream = current.split("|");
    let tags = splitStream[2].split(",");
    for(let j = 0; j < tags.length; j++){
      splitTags.push(tags[j]);
    }
  }
  let streamCount = createCount(splitTags);
  let sortedStreams = sortStreams(streamCount);
  let map = returnSortedMap(sortedStreams);
  return map;
}

const createCount = (list) => {
  let map = {};
  for(let i = 0; i < list.length; i++){
    let current = list[i];
    if(map[current] === undefined){
      map[current] = 0;
    }
    map[current]++;
  }
  return map;
}

const sortStreams = (obj) => {
  let ordered = [];
  for(let key in obj){
    ordered.push([key, obj[key]]);
  }
  ordered.sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  });
  return ordered;
}

const returnSortedMap = (list) => {
  let map = {};
  for(let i = 0; i < list.length; i++){
    let stream = list[i][0];
    let count = list[i][1];
    if(map[stream] === undefined){
      map[stream] = count;
    }
  }
  return map;
};
