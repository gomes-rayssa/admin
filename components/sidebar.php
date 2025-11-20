<aside class="sidebar">
    <nav>
        <ul>
            <li>
                <a href="index.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'index.php' ? 'active' : ''; ?>">
                    <i class="fas fa-home"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a href="produtos.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'produtos.php' ? 'active' : ''; ?>">
                    <i class="fas fa-box"></i>
                    <span>Produtos</span>
                </a>
            </li>
            <li>
                <a href="pedidos.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'pedidos.php' ? 'active' : ''; ?>">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Pedidos</span>
                </a>
            </li>
            <li>
                <a href="clientes.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'clientes.php' ? 'active' : ''; ?>">
                    <i class="fas fa-users"></i>
                    <span>Clientes</span>
                </a>
            </li>
            <li>
                <a href="funcionarios.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'funcionarios.php' ? 'active' : ''; ?>">
                    <i class="fas fa-user-tie"></i>
                    <span>Funcionários</span>
                </a>
            </li>
            <li>
                <a href="relatorios.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'relatorios.php' ? 'active' : ''; ?>">
                    <i class="fas fa-chart-bar"></i>
                    <span>Relatórios</span>
                </a>
            </li>
            <li>
                <a href="configuracoes.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'configuracoes.php' ? 'active' : ''; ?>">
                    <i class="fas fa-cog"></i>
                    <span>Configurações</span>
                </a>
            </li>
        </ul>
    </nav>
</aside>
