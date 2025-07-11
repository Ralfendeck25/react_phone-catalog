import { Link } from 'react-router-dom';
import { useFavourites } from '../../shared/context/FavouritesContext';
import style from './Menu.module.scss';
import { useCart } from '../../shared/context/CartContext';
import { useTheme } from '../../shared/context/ThemeContext';

export const Menu = () => {
  const navigation = ['HOME', 'PHONES', 'TABLETS', 'ACCESSORIES'];
  const { favourites } = useFavourites();
  const { products } = useCart();
  const { theme } = useTheme();

  return (
    <div className={style.aside}>
      <nav className={style.nav}>
        <div className={style.nav__left}>
          <div className={style.nav__logo}>
            <Link to="/">
              <img
                src={
                  theme === 'light'
                    ? '/logo/Logo.svg'
                    : '/logo/Logo-dark-theme.svg'
                }
                alt="Logo"
              />
            </Link>
          </div>
        </div>
        <div className={style.nav__right}>
          <div className={style.nav__close}>
            <Link to="/">
              <img
                src={
                  theme === 'light'
                    ? '/icons/close.svg'
                    : '/icons/close-dark-theme.svg'
                }
                alt="Close"
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className={style.nav__menuList}>
        <ul className={style.nav__menuSelect}>
          {navigation.map(item => (
            <li className={style.nav__option} key={item}>
              <Link className={style.nav__link} to={`/${item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.nav__bottom}>
        <div className={style.nav__menuHeart}>
          <Link to="/favorites">
            <img
              src={
                theme === 'light'
                  ? '/icons/heart.svg'
                  : '/icons/heart-dark-theme.svg'
              }
              alt="Heart"
            />
            {favourites.length > 0 && (
              <span className={style.nav__badge}>{favourites.length}</span>
            )}
          </Link>
        </div>
        <div className={style.nav__menuCart}>
          <Link to="/cart">
            <img
              src={
                theme === 'light'
                  ? '/icons/cart.svg'
                  : '/icons/cart-dark-theme.svg'
              }
              alt="Cart"
            />
            {products.length > 0 && (
              <span className={style.nav__badge}>{products.length}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
