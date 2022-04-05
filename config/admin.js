module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f49a81bb89f39c4c6889f4c317ad63c4'),
  },
});
