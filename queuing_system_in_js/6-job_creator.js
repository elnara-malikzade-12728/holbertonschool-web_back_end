import kue from 'kue';
const queue = kue.createQueue();

const jobData = {
  phoneNumber: '1234567890',
  message: 'Your notification message is here.'
};
const job = queue.create('push_notification_code', jobData);
job.on('complte', (result) => {
    console.log(`Notification job created: ${job.id}`);
});
job.on('failed', (errorMessage) => {
    console.log(`Notification job failed`);
  if (!err){
    setImmediate(() =>{
        console.log(`Notification job created: ${job.id}`);
    });
  }
});