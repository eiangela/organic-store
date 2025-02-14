import AuthModule from '../AuthModule.vue';
import LoginView from '../views/LoginView.vue';

const AuthRoutes = [
    {
        path: '/auth',
        name: 'authModule',
        component: AuthModule,
        children: [
            {
                path: 'login',
                name: 'authLogin',
                component: LoginView,
            },
        ],
    },
];

export default AuthRoutes;
