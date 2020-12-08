export default {
  collectionName: 'restaurants',
  info: {
    name: 'Restaurant',
  },
  options: {
    timestamps: ['created_at', 'updated_at'],
  },
  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    seats: {
      type: 'integer',
    },
  },
};
