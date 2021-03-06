# Generated by Django 2.2.2 on 2019-06-28 05:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=2000, verbose_name='post content')),
                ('thumbnail', models.ImageField(upload_to='images/thumbnails', verbose_name='thumbnail')),
                ('url', models.URLField()),
                ('created_at', models.DateTimeField(verbose_name='post created time')),
                ('modified_at', models.DateTimeField(verbose_name='post modified time')),
                ('is_published', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Bogo Post',
                'verbose_name_plural': 'Bogo Posts',
            },
        ),
        migrations.CreateModel(
            name='PostReaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reaction', models.CharField(choices=[('D', '띠용'), ('G', '굿'), ('H', '한숨')], max_length=1)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='post.Post')),
            ],
        ),
        migrations.CreateModel(
            name='PostComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(max_length=1000, verbose_name='post comment content')),
                ('created_at', models.DateTimeField(verbose_name='post comment created time')),
                ('modified_at', models.DateTimeField(verbose_name='post comment modified time')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='post.Post')),
            ],
        ),
    ]
