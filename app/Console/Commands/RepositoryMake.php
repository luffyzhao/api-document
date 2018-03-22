<?php

namespace App\Console\Commands;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Str;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class RepositoryMake extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repostory {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '创建仓库';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Repository command';


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $name = $this->getNameInput();

        if ($this->alreadyExists($name)) {
            $this->error($this->type.' already exists!');

            return false;
        }

        $this->existsInterfaces($name);

        $this->existsModel($name);

        $path = $this->getPath(
          $this->qualifyClass($name)
        );

        $this->makeDirectory($path);

        $this->files->put($path, $this->buildClass($name));

        $this->info($this->type.' created successfully.');
    }

    /**
     * Build the class with the given name.
     *
     * @param  string  $name
     * @return string
     */
    protected function buildClass($name)
    {
        $stub = $this->files->get($this->getStub());

        return $this->replaceClass($stub, $name);
    }
    /**
     * 模型是否存在
     * @method existsModel
     * @param  [type]      $name [description]
     * @return [type]            [description]
     * author
     */
    public function existsModel($name)
    {
        $class= "Model\\" . $name;
        $parentModelClass= $this->parseModel($class);
        if (! class_exists($parentModelClass)) {
            if ($this->confirm("A {$parentModelClass} model does not exist. Do you want to generate it?", true)) {
                $this->call('make:model', ['name' => $parentModelClass]);
            }
        }
    }

    /**
     * 是存在接口类
     * @method existsInterfaces
     * @param  [type]           $name [description]
     * @return [type]                 [description]
     * author
     */
    public function existsInterfaces($name)
    {
        $class = "Repository\\Interfaces\\" . $name . "RepositoryInterfaces";
        $parentModelClass= $this->parseModel($class);
        if (! class_exists($parentModelClass)) {
            $this->makeInterfaces($parentModelClass, $name);
        }
    }

    /**
     * 创建
     * @method makeInterfaces
     * @param  [type]         $parentModelClass [description]
     * @return [type]                           [description]
     * author
     */
    public function makeInterfaces($class, $name)
    {
        $path = $this->getPath(
          $this->qualifyClass($class)
        );

        $this->makeDirectory($path);
        $this->files->put($path, $this->buildInterfacesClass($class));
    }

    /**
     * 从模板生成Class
     * @method buildInterfacesClass
     * @param  [type]               $class [description]
     * @return [type]                      [description]
     * author
     */
    public function buildInterfacesClass($class)
    {
        $stub = $this->files->get($this->getInterfacesStub());
        return $this->replaceClass($stub, $class);
    }
    /**
     * Get the fully-qualified model class name.
     *
     * @param  string  $model
     * @return string
     */
    protected function parseModel($model)
    {
        if (preg_match('([^A-Za-z0-9_/\\\\])', $model)) {
            throw new InvalidArgumentException('Model name contains invalid characters.');
        }

        $model = trim(str_replace('/', '\\', $model), '\\');

        if (! Str::startsWith($model, $rootNamespace = $this->laravel->getNamespace())) {
            $model = $rootNamespace.$model;
        }

        return $model;
    }

    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getStub()
    {
        return __DIR__.'/../stubs/repository.stub';
    }


    /**
     * Get the stub file for the generator.
     *
     * @return string
     */
    protected function getInterfacesStub()
    {
        return __DIR__.'/../stubs/repository.interface.stub';
    }
    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace . '\Repository';
    }

    /**
     * Get the destination class path.
     *
     * @param  string  $name
     * @return string
     */
    protected function getPath($name)
    {
        $name = Str::replaceFirst($this->rootNamespace(), '', $name);

        return $this->laravel['path'].'/'.str_replace('\\', '/', $name).'Repository.php';
    }

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments()
    {
        return [
            ['name', InputArgument::REQUIRED, 'The name of the command.'],
        ];
    }
}
