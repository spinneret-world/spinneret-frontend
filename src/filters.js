import dayjs from 'dayjs';

const filters = {
  date: function(value){
    return dayjs(value).format('MM/DD/YYYY');
  }
}

export default filters;
